<script setup>
// 楽曲提供・制作実績の一覧。
// youtubeId に動画ID（embed URL の末尾）を入れると埋め込みが切り替わります。
// 各 work は date / title / role / youtubeId を持つ。後から自由に追加できます。
const works = [
  {
    date: '2026/5/28',
    label: 'Release',
    title: 'この声が届くまで／れいら。',
    role: '作詞・作編曲',
    youtubeId: 'sQDUB5u5QHo',
  },
]
</script>

<template>
  <section id="works" class="relative py-28 md:py-40 border-t border-white/5">
    <div class="section-wrap">
      <div class="section-heading">
        <span class="index">02 / Works</span>
        <span class="label">works</span>
        <span class="rule" />
      </div>

      <p
        class="text-neutral-400 mb-12 md:mb-16 max-w-xl leading-relaxed text-sm md:text-base"
      >
        アーティストへの楽曲提供・制作実績です。
      </p>

      <div class="grid md:grid-cols-2 gap-10 md:gap-14">
        <article v-for="w in works" :key="w.youtubeId" class="group">
          <div class="flex items-baseline justify-between mb-4">
            <span
              class="font-mono text-[10px] md:text-xs tracking-widestest uppercase text-accent-cyan"
            >
              {{ w.label }}
            </span>
            <span class="font-mono text-[10px] md:text-xs text-neutral-500">
              {{ w.date }}
            </span>
          </div>

          <div
            class="relative aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-zinc-900 transition-shadow group-hover:border-white/20"
          >
            <iframe
              class="absolute inset-0 w-full h-full"
              :src="`https://www.youtube.com/embed/${w.youtubeId}`"
              :title="w.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>

          <div class="mt-5">
            <h3 class="text-lg md:text-xl font-display font-light text-white">
              {{ w.title }}
            </h3>
            <p
              class="mt-1 font-mono text-[11px] text-neutral-500 tracking-wider"
            >
              {{ w.role }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
