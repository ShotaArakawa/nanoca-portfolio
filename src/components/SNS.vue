<script setup>
// 連絡先メールアドレス。
const email = 'nanoca.mare@gmail.com'

// SNSリンク。すべて nanoca_p アカウントに統一済み。
const links = [
  {
    name: 'X',
    handle: '@nanoca_p',
    url: 'https://x.com/nanoca_p',
    // X (旧Twitter) のロゴ
    svg: 'M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.01L4.5 22H1.244l8.04-9.19L1 2h7.02l4.84 6.39L18.244 2zm-1.2 18h1.86L7.06 4h-1.9l11.884 16z',
  },
  {
    name: 'YouTube',
    handle: '@nanoca_p',
    url: 'https://www.youtube.com/@nanoca_p',
    svg: 'M23.5 6.2a3 3 0 0 0-2.1-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.58A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.58a3 3 0 0 0 2.1-2.12A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z',
  },
  {
    name: 'TikTok',
    handle: '@nanoca_p',
    url: 'https://www.tiktok.com/@nanoca_p',
    svg: 'M21 8.5a7.4 7.4 0 0 1-4.3-1.37v7.3a6.07 6.07 0 1 1-5.24-6.02v3.06a3 3 0 1 0 2.18 2.9V2h3.06a4.34 4.34 0 0 0 4.3 4.3V8.5z',
  },
  {
    name: 'Instagram',
    handle: '@nanoca_p',
    url: 'https://www.instagram.com/nanoca_p/',
    // Instagram は path 1本では難しいので、コンポーネント側で別途描画
    isInstagram: true,
    svg: '',
  },
  {
    name: 'niconico',
    handle: 'user/118037014',
    url: 'https://www.nicovideo.jp/user/118037014',
    // ニコニコ動画はテキストロゴ風で表現
    isNico: true,
    svg: '',
  },
]
</script>

<template>
  <section id="sns" class="relative py-28 md:py-40 border-t border-white/5">
    <div class="section-wrap">
      <div class="section-heading">
        <span class="index">04 / Contact</span>
        <span class="label">contact</span>
        <span class="rule" />
      </div>

      <p class="text-neutral-400 mb-12 md:mb-16 max-w-xl leading-relaxed text-sm md:text-base">
        新曲・制作の進捗は各SNSにて。<br />
        楽曲提供のご依頼・お問い合わせは X (Twitter) のDMか、下記メールアドレスからどうぞ。
      </p>

      <!-- Email -->
      <div class="mb-12 md:mb-16">
        <p
          class="font-mono text-[10px] md:text-xs tracking-widestest uppercase text-neutral-500 mb-3"
        >
          // email
        </p>
        <a
          :href="`mailto:${email}`"
          class="group inline-flex items-baseline gap-3 font-display font-light text-white text-xl md:text-3xl tracking-tight hover:text-accent-cyan transition-colors"
        >
          <span>{{ email }}</span>
          <span
            class="font-mono text-[10px] md:text-xs text-neutral-500 group-hover:text-accent-cyan transition-colors"
          >
            ↗
          </span>
        </a>
      </div>

      <!-- SNS -->
      <p
        class="font-mono text-[10px] md:text-xs tracking-widestest uppercase text-neutral-500 mb-4"
      >
        // social
      </p>
      <ul class="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
        <li v-for="l in links" :key="l.name">
          <a
            :href="l.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col items-start gap-4 p-5 rounded-sm border border-white/10 bg-white/[0.015] hover:border-white/30 hover:bg-white/[0.03] transition-all"
          >
            <!-- Instagram の場合は専用SVG -->
            <svg
              v-if="l.isInstagram"
              class="w-5 h-5 stroke-neutral-300 group-hover:stroke-white transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
            <!-- niconico の場合はテキストロゴ風 -->
            <span
              v-else-if="l.isNico"
              class="font-mono text-[10px] tracking-widestest text-neutral-300 group-hover:text-white transition-colors border border-current rounded-sm px-1.5 py-0.5"
            >
              ニコ
            </span>
            <svg
              v-else
              class="w-5 h-5 fill-neutral-300 group-hover:fill-white transition-colors"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path :d="l.svg" />
            </svg>
            <div>
              <p class="text-white text-sm font-light">{{ l.name }}</p>
              <p class="font-mono text-[10px] text-neutral-500 mt-1 tracking-wider">
                {{ l.handle }}
              </p>
            </div>
          </a>
        </li>
      </ul>

      <footer
        class="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 font-mono text-[11px] text-neutral-500"
      >
        <span>© 2026 nanoca — All rights reserved.</span>
        <a
          :href="`mailto:${email}`"
          class="hover:text-white transition-colors"
        >
          {{ email }}
        </a>
        <span>built with Vue 3 + Tailwind CSS</span>
      </footer>
    </div>
  </section>
</template>
