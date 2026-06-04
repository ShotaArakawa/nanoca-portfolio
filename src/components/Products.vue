<script setup>
// 自作の制作物 — Web Apps と 音楽ソフト/VST。
// 各アイテムは title / description / link / linkLabel を持つ。
// 後から自由に追加・編集してください。
const groups = [
  {
    no: '01',
    kind: 'Web Applications',
    accent: '〈 web 〉',
    items: [
      {
        title: 'Project Alpha',
        description:
          '音楽×可視化を題材にした個人開発のWebアプリ。Vue + Web Audio API で構築。',
        link: 'https://github.com/',
        linkLabel: 'GitHub →',
      },
      {
        title: 'Project Beta',
        description:
          'クリエイター向けのタスク管理ツール。ミニマルなUIと高速な操作性が特徴。',
        link: 'https://github.com/',
        linkLabel: 'GitHub →',
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
          'ローファイなテクスチャを付与するサチュレーター系VST。JUCE で実装中。',
        link: 'https://github.com/',
        linkLabel: 'GitHub →',
      },
      {
        title: 'PLUGIN_002',
        description:
          'グラニュラー再合成のためのインストゥルメントVST。実験的なサウンド向け。',
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
            <a
              v-for="it in g.items"
              :key="it.title"
              :href="it.link"
              target="_blank"
              rel="noopener noreferrer"
              class="group block p-6 md:p-7 rounded-sm border border-white/10 bg-white/[0.015] hover:border-white/30 hover:bg-white/[0.03] transition-all"
            >
              <div class="flex items-baseline justify-between gap-4">
                <h4
                  class="text-base md:text-lg font-display font-light text-white tracking-tight"
                >
                  {{ it.title }}
                </h4>
                <span
                  class="font-mono text-[10px] tracking-widest uppercase text-neutral-500 group-hover:text-accent-cyan transition-colors"
                >
                  {{ it.linkLabel }}
                </span>
              </div>
              <p
                class="mt-3 text-neutral-400 text-sm leading-relaxed"
              >
                {{ it.description }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
