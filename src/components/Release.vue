<script setup>
const popular = {
  title: '水中呼吸',
  type: 'Original Song / MV',
  date: '2023/7/16',
  youtubeId: 'qaNpWHmamJc',
}

const tracks = [
  // 新曲が出たら先頭に追加
  { title: '水中呼吸 / kafu feat. 夏亀 - underwater breath', date: '2023/7/16', youtubeId: 'qaNpWHmamJc' },
  { title: 'デカダンス / Flower - décadence', date: '2023/5/28', youtubeId: 'DcWsgYUfbkY' },
  { title: '四月になれば / 可不', date: '2023/4/14', youtubeId: 'oY177RexKh0' },
  { title: 'anxious umbrella / 初音ミク', date: '2022/12/16', youtubeId: 'ECgMVtTZ2aQ' },
  { title: '独白体 - kafu', date: '2022/4/24', youtubeId: 'VyYIrSBycT0' },
  { title: 'Paranoia / 初音ミク&IA', date: '2022/4/24', youtubeId: 'eBVZWbDvO4o' },
  { title: '濡れ衣 / 初音ミク', date: '2022/1/30', youtubeId: 'y6u3EGmT0pw' },
  { title: '不文律 - kafu', date: '2021/11/03', youtubeId: 'LkKDhS8mgXs' },
  { title: 'コンセント少女 / 初音ミク', date: '2021/4/25', youtubeId: 'iHHh8rEDzxI' },
  { title: '透過線 - IA', date: '2021/3/17', youtubeId: 'vLg5BKKG664' },
  { title: 'Sorrow / 初音ミク', date: '2021/2/20', youtubeId: 'ULK4qoQnAN8' },
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
        よく聴かれている曲と投稿曲を置いています。
      </p>

      <!-- Popular -->
      <div class="mb-16 md:mb-20">
        <span class="font-mono text-[10px] md:text-xs tracking-widestest uppercase text-accent-cyan block mb-4">
          Popular
        </span>
        <div class="relative aspect-video w-full max-w-2xl overflow-hidden rounded-sm border border-white/10 bg-zinc-900">
          <iframe
            class="absolute inset-0 w-full h-full"
            :src="`https://www.youtube.com/embed/${popular.youtubeId}`"
            :title="popular.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="mt-5 max-w-2xl flex items-baseline justify-between gap-4">
          <div>
            <h3 class="text-lg md:text-xl font-display font-light text-white">
              {{ popular.title }}
            </h3>
            <p class="mt-1 font-mono text-[11px] text-neutral-500 tracking-wider">
              {{ popular.type }}
            </p>
          </div>
          <span class="font-mono text-[11px] text-neutral-400">{{ popular.date }}</span>
        </div>
      </div>

      <!-- All Tracks -->
      <div>
        <span class="font-mono text-[10px] md:text-xs tracking-widestest uppercase text-accent-cyan block mb-6">
          All Tracks
        </span>
        <div class="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 md:-mx-8 md:px-8 snap-x snap-mandatory">
          <article
            v-for="t in tracks"
            :key="t.youtubeId"
            class="shrink-0 w-[72vw] md:w-80 snap-start"
          >
            <div class="relative aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-zinc-900 hover:border-white/20 transition-colors">
              <iframe
                class="absolute inset-0 w-full h-full"
                :src="`https://www.youtube.com/embed/${t.youtubeId}`"
                :title="t.title"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div class="mt-3 flex items-baseline justify-between gap-4">
              <h4 class="text-sm md:text-base font-display font-light text-white">
                {{ t.title }}
              </h4>
              <span class="font-mono text-[11px] text-neutral-400 shrink-0">{{ t.date }}</span>
            </div>
          </article>
        </div>
      </div>

    </div>
  </section>
</template>
