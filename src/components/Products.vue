<script setup>
// 自作の制作物 — Web Apps と 音楽ソフト/VST。
// 各アイテムは title / description / link / linkLabel を持つ。
// image（任意）/ url（任意・デモへのリンク）/ github（任意）を加えると、
// サムネイル付き・複数リンク付きのカードとして表示されます。
// 後から自由に追加・編集してください。
import musicTrackerMockup from '../assets/music-tracker-mockup.png'

const groups = [
  {
    no: '01',
    kind: 'Web Applications',
    accent: '〈 web 〉',
    items: [
      {
        title: 'MusicTracker',
        description:
          '作曲家兼エンジニアが作った、直感的な楽曲デモ進捗管理アプリ。',
        image: musicTrackerMockup,
        url: 'https://music-tracker-105d.onrender.com/songs',
        github: 'https://github.com/ShotaArakawa/music-tracker',
      },
    ],
  },
  {
    no: '02',
    kind: 'Audio Software / VST Plugins',
    accent: '〈 audio 〉',
    items: [
      {
        title: 'PLUGIN_001',
        description:
          'サチュレーター。Comming Soon...',
        link: 'https://github.com/',
        linkLabel: 'GitHub →',
      },
      {
        title: 'PLUGIN_002',
        description:
          'パラメトリックイコライザー。Comming Soon...',
        link: 'https://github.com/',
        linkLabel: 'GitHub →',
      },
    ],
  },
]
</script>

<template>
  <section
    id="products"
    class="relative py-28 md:py-40 border-t border-white/5"
  >
    <div class="section-wrap">
      <div class="section-heading">
        <span class="index">03 / Products</span>
        <span class="label">products</span>
        <span class="rule" />
      </div>

      <p
        class="text-neutral-400 mb-16 md:mb-20 max-w-xl leading-relaxed text-sm md:text-base"
      >
        音楽以外に、開発者としてつくっているWebアプリケーションや
        音楽ソフトウェア／VSTプラグインの紹介です。
      </p>

      <div class="space-y-20 md:space-y-24">
        <div v-for="g in groups" :key="g.no">
          <div class="flex items-baseline gap-4 mb-8 md:mb-10">
            <span
              class="font-mono text-[10px] md:text-xs tracking-widestest uppercase text-accent-cyan"
            >
              {{ g.no }} — {{ g.accent }}
            </span>
            <h3
              class="text-xl md:text-2xl font-display font-light text-white tracking-tight"
            >
              {{ g.kind }}
            </h3>
            <span
              class="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"
            />
          </div>

          <div class="grid md:grid-cols-2 gap-5 md:gap-6">
            <div
              v-for="it in g.items"
              :key="it.title"
              class="group relative flex flex-col rounded-sm border border-white/10 bg-white/[0.015] overflow-hidden hover:border-white/30 hover:bg-white/[0.03] transition-all"
            >
              <a
                v-if="it.image"
                :href="it.url || it.link"
                target="_blank"
                rel="noopener noreferrer"
                class="block relative aspect-video w-full overflow-hidden border-b border-white/10 bg-zinc-900"
              >
                <img
                  :src="it.image"
                  :alt="it.title"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>

              <div class="flex flex-col flex-1 p-6 md:p-7">
                <div class="flex items-baseline justify-between gap-4">
                  <h4
                    class="text-base md:text-lg font-display font-light text-white tracking-tight"
                  >
                    {{ it.title }}
                  </h4>
                  <span
                    v-if="it.linkLabel"
                    class="font-mono text-[10px] tracking-widest uppercase text-neutral-500 group-hover:text-accent-cyan transition-colors"
                  >
                    {{ it.linkLabel }}
                  </span>
                </div>

                <p class="mt-3 text-neutral-400 text-sm leading-relaxed">
                  {{ it.description }}
                </p>

                <!-- リンク行（url / github を持つアイテム用） -->
                <div
                  v-if="it.url || it.github"
                  class="mt-5 pt-4 flex items-center gap-5 border-t border-white/5"
                >
                  <a
                    v-if="it.url"
                    :href="it.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-mono text-[10px] tracking-widest uppercase text-neutral-400 hover:text-accent-cyan transition-colors"
                  >
                    Live →
                  </a>
                  <a
                    v-if="it.github"
                    :href="it.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-mono text-[10px] tracking-widest uppercase text-neutral-400 hover:text-accent-cyan transition-colors"
                  >
                    GitHub →
                  </a>
                </div>

                <!-- 旧来のシングルリンク用（カード全体をリンク化） -->
                <a
                  v-else-if="it.link"
                  :href="it.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="absolute inset-0"
                  :aria-label="it.title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
