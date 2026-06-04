<script setup>
import Hero from './components/Hero.vue'
import Release from './components/Release.vue'
import Works from './components/Works.vue'
import SNS from './components/SNS.vue'

const nav = [
  { id: 'release', label: 'Release' },
  { id: 'works', label: 'Works' },
  { id: 'sns', label: 'Contact' },
]
</script>

<template>
  <div class="noise relative min-h-screen">
    <header
      class="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-white/5"
    >
      <div class="section-wrap flex items-center justify-between h-14 md:h-16">
        <a
          href="#hero"
          class="font-mono text-[11px] md:text-xs tracking-widestest text-white"
        >
          NANOCA<span class="text-accent-cyan">.</span>
        </a>
        <nav class="flex items-center gap-5 md:gap-8">
          <a
            v-for="n in nav"
            :key="n.id"
            :href="`#${n.id}`"
            class="font-mono text-[10px] md:text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors"
          >
            {{ n.label }}
          </a>
        </nav>
      </div>
    </header>

    <main>
      <Hero />
      <Release />
      <Works />
      <SNS />
    </main>
  </div>
</template>
