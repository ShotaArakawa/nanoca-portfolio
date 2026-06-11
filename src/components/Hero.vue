<script setup>
import { ref } from 'vue'

// プロフィール画像。
// src/assets/icon.png を直接インポート → Vite がハッシュ付きの本番URLに解決する。
// 後から本番用のイラストを同じパスに上書きすれば、自動でそちらが反映される。
import iconUrl from '../assets/icon.png'

const iconLoaded = ref(false)
const onIconLoad = () => (iconLoaded.value = true)
const onIconError = () => (iconLoaded.value = false)
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden"
  >
    <!-- 控えめな環境光 -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(125,211,252,0.06),transparent_60%)]"
    />
    <div
      class="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-white/[0.02] blur-3xl animate-float"
    />

    <div class="section-wrap relative z-10 py-28 md:py-32">
      <p
        class="font-mono text-[10px] md:text-xs tracking-widestest text-neutral-500 uppercase mb-8 animate-flicker"
      >
        // music creator / engineer
      </p>

      <!-- 名前タイポグラフィ -->
      <h1
        class="font-display font-light text-white leading-[0.95] text-[18vw] md:text-[10rem] lg:text-[12rem]"
      >
        <span class="block">なのか</span>
        <span
          class="block font-mono font-light italic text-neutral-500 text-[7vw] md:text-3xl lg:text-4xl tracking-[0.2em] mt-4 md:mt-6"
        >
          / nanoca
        </span>
      </h1>

      <p
        class="mt-8 md:mt-10 font-mono text-xs md:text-sm tracking-[0.35em] uppercase text-neutral-400"
      >
        Music Creator &nbsp;/&nbsp; Engineer
      </p>

      <!-- アイコン + プロフィール文章 -->
      <div
        class="mt-16 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-14 items-start"
      >
        <div class="md:col-span-3 flex md:block justify-start">
          <div
            class="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/10 bg-zinc-900 shadow-[0_20px_60px_-25px_rgba(125,211,252,0.25)]"
          >
            <!-- プレースホルダー（画像が透過/未配置のときに透けて見える） -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900"
            >
              <span
                class="font-mono text-[10px] tracking-widestest text-neutral-500 uppercase"
              >
                nanoca
              </span>
            </div>
            <img
              :src="iconUrl"
              alt="nanoca icon"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              :class="iconLoaded ? 'opacity-100' : 'opacity-0'"
              @load="onIconLoad"
              @error="onIconError"
            />
            <div
              class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-full"
            />
          </div>
        </div>

        <div class="md:col-span-9 space-y-5 text-neutral-300 leading-loose max-w-2xl">
          <p class="text-sm md:text-base">
            ボカロP / 作曲家 / ギタリスト / ソフトウェアエンジニア<br />
            キャッチーなメロディと多彩なサウンドメイクを得意とし、明るくも切ない歌詞観で惹きつけている。
          </p>
          <p class="text-sm md:text-base text-neutral-400">
            ボーカロイドを軸にオリジナル曲を発表しつつ、「メモラブル」のコンポーザー兼ギタリストとしてバンド活動、アーティストへの楽曲提供、ソフトウェアの開発なども行う。
          </p>
          <p class="font-mono text-[11px] md:text-xs text-neutral-500 pt-2">
            // Vocaloid Producer / Composer / Guitarist / Software Engineer
          </p>
        </div>
      </div>

      <div
        class="mt-16 md:mt-20 flex items-center gap-3 font-mono text-[11px] md:text-xs text-neutral-500"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
        <span class="tracking-widest uppercase">
          now playing — "水中呼吸"
        </span>
      </div>
    </div>

    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widestest text-neutral-600 uppercase"
    >
      scroll ↓
    </div>
  </section>
</template>
