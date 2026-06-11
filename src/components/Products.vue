<script setup>
const itPortfolio = {
  url: 'https://shotaarakawa.github.io/',
  description:
    'フルスタックエンジニアとしての制作物まとめ。Java / Spring Boot / Vue.js を軸に、Webアプリなどを公開しています。',
}
</script>

<template>
  <section
    id="it-portfolio"
    class="relative py-28 md:py-40 border-t border-white/5"
  >
    <div class="section-wrap">
      <div class="section-heading">
        <span class="index">03 / IT Portfolio</span>
        <span class="label">it portfolio</span>
        <span class="rule" />
      </div>

      <p class="text-neutral-400 mb-12 md:mb-16 max-w-xl leading-relaxed text-sm md:text-base">
        音楽以外に、エンジニアとしてつくっている制作物はこちらにまとめています。
      </p>

      <a
        :href="itPortfolio.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex flex-col gap-4 p-6 md:p-7 rounded-sm border border-white/10 bg-white/[0.015] hover:border-white/30 hover:bg-white/[0.03] transition-all max-w-xl w-full"
      >
        <div class="flex items-center justify-between gap-4">
          <span class="font-mono text-xs md:text-sm tracking-widest text-white break-all">
            {{ itPortfolio.url }}
          </span>
          <span class="font-mono text-[10px] tracking-widest uppercase text-neutral-500 group-hover:text-accent-cyan transition-colors shrink-0">
            ↗
          </span>
        </div>
        <p class="text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
          {{ itPortfolio.description }}
        </p>
      </a>
    </div>
  </section>
</template>
