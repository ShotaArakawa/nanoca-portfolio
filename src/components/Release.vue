<script setup>
// =========================================================
// 楽曲埋め込みリスト。
// youtubeId を実際の動画ID（YouTube URL の v= の後ろ／short URL の末尾）に
// 差し替えれば、そのまま埋め込みが切り替わります。
//
//   例: https://www.youtube.com/watch?v=qaNpWHmamJc → 'qaNpWHmamJc'
//        https://youtu.be/qaNpWHmamJc               → 'qaNpWHmamJc'
// =========================================================
const releases = [
  {
    label: 'Latest',
    caption: '最新曲',
    title: '水中呼吸',
    type: 'Original Song / MV',
    year: '2026',
    // ★ 最新曲の動画IDをここに貼り替えてください ★
    // 現在は仮で「水中呼吸」と同じIDを設定しています。
    youtubeId: 'qaNpWHmamJc',
  },
  {
    label: 'Popular',
    caption: '人気曲',
    title: '水中呼吸',
    type: 'Original Song / MV',
    year: '2025',
    // 人気曲：水中呼吸
    youtubeId: 'qaNpWHmamJc',
  },
]
</script>

<template>
  <section id="release" class="relative py-28 md:py-40 border-t border-white/5">
    <div class="section-wrap">
      <div class="section-heading">
        <span class="index">01 / Release</span>
        <span class="label">release</span>
        <span class="rule" />
      </div>

      <p class="text-neutral-400 mb-12 md:mb-16 max-w-xl leading-relaxed text-sm md:text-base">
        最新曲と、よく聴かれているトラックを置いています。<br />
        ヘッドフォン推奨。
      </p>

      <div class="grid md:grid-cols-2 gap-10 md:gap-14">
        <article
          v-for="r in releases"
          :key="r.label"
          class="group"
        >
          <div class="flex items-baseline justify-between mb-4">
            <span
              class="font-mono text-[10px] md:text-xs tracking-widestest uppercase text-accent-cyan"
            >
              {{ r.label }}
            </span>
            <span class="font-mono text-[10px] md:text-xs text-neutral-500">
              {{ r.caption }}
            </span>
          </div>

          <div
            class="relative aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-zinc-900 transition-shadow group-hover:border-white/20"
          >
            <iframe
              class="absolute inset-0 w-full h-full"
              :src="`https://www.youtube.com/embed/${r.youtubeId}`"
              :title="r.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>

          <div class="mt-5 flex items-baseline justify-between gap-4">
            <div>
              <h3 class="text-lg md:text-xl font-display font-light text-white">
                {{ r.title }}
              </h3>
              <p class="mt-1 font-mono text-[11px] text-neutral-500 tracking-wider">
                {{ r.type }}
              </p>
            </div>
            <span class="font-mono text-[11px] text-neutral-400">{{ r.year }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
