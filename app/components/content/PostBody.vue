<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const props = defineProps<{ date?: string }>()
const formattedDate = useDateFormat(new Date(`${props.date}`).toLocaleString('en-US', { timeZone: 'UTC' }), 'DD/MM/YYYY', { locales: 'en-US' })
</script>

<template>
  <main class="relative py-14">
    <div class="mx-auto px-4">
      <!-- Realistic airplane with globe -->
      <div class="pointer-events-none absolute left-0 top-0 hidden opacity-10 lg:block">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Globe -->
          <g transform="translate(40, 140)">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19c.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266c.035.634.618.824 1.214 1.017c.577.188 1.168.38 1.286.983c.082.417-.075.988-.22 1.52c-.215.782-.406 1.48.22 1.48c1.5-.5 3.798-3.186 4-5c.138-1.243-2-2-3.5-2.5c-.478-.16-.755.081-.99.284c-.172.15-.322.279-.51.216c-.445-.148-2.5-2-1.5-2.5c.78-.39.952-.171 1.227.182c.078.099.163.208.273.318c.609.304.662-.132.723-.633c.039-.322.081-.671.277-.867c.434-.434 1.265-.791 2.028-1.12c.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" /></svg>
          </g>

          <!-- Airplane in diagonal flight -->
          <g transform="translate(125, 35)">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 64 64"><path fill="currentColor" d="M61.22 4.387C60.286 2.869 58.659 2 56.754 2c-1.108 0-2.248.292-3.388.867c-3.855 1.948-8.762 5.468-13.911 9.919l-10.446-1.161l1.893-1.894l-1.909-1.91l-3.422 3.421l-10.891-1.209l2.27-2.27l-1.911-1.911l-3.797 3.799l-7.97-.886c-1.968-.219-1.588 4.727.7 5.794l22.869 10.66c-4.408 4.925-10.354 12.196-12.55 17.771L4.262 41.876c-.678-.074-.548 1.625.239 1.992c5.061 2.358 7.717 3.597 9.113 4.248c.032.105.075.205.116.305c-1.924 2.323-3.005 4.085-2.614 4.473c.386.385 2.138-.69 4.451-2.608q.155.067.328.124l4.236 9.091c.368.788 2.068.915 1.993.239l-1.109-10.001c4.861-1.944 11.521-6.907 17.784-12.543l10.639 22.83c1.068 2.293 6.016 2.669 5.797.699l-.886-7.971l3.797-3.796l-1.911-1.911l-2.268 2.269l-1.209-10.892l3.419-3.418l-1.911-1.912l-1.891 1.892l-1.16-10.441c4.453-5.149 7.973-10.056 9.919-13.911c1.125-2.233 1.156-4.51.086-6.247M59.421 9.77c-2.676 5.302-8.707 13.08-16.521 20.892c-8.438 8.44-16.827 14.79-22.108 17.087l-.232-2.098c3.957-4.042 6.65-7.701 6.076-8.283c-.582-.578-4.242 2.117-8.285 6.075l-2.111-.235c2.303-5.28 8.667-13.675 17.1-22.108c7.813-7.812 15.59-13.843 20.891-16.521c.904-.455 1.76-.661 2.524-.661c2.73-.001 4.293 2.625 2.666 5.852" /><path fill="currentColor" d="m52.743 6.057l-3.295 2.047c1.505-.52 3.557.125 4.748 1.076l2.643-2.642c-1.09-.841-2.61-.981-4.096-.481m2.077 3.747c.95 1.191 1.595 3.243 1.075 4.747l2.047-3.295c.5-1.487.359-3.006-.48-4.095z" /></svg>
          </g>

          <!-- Flight path connecting globe to airplane -->
          <path d="M80 160 C 85 110, 125 70, 150 50" class="fill-none stroke-gray-800 dark:stroke-gray-200" stroke-width="1" stroke-dasharray="4 2" />
        </svg>
      </div>

      <!-- Large compass on right side -->
      <div class="pointer-events-none absolute right-16 top-1/4 hidden opacity-5 lg:block xl:right-32">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="currentColor" d="m15 9l-3-9l-3 9l-9 3l9 3l3 9l3-9l9-3zM4 12l6-2l1 2zm8 8l-2-6l2-1zm0-16l2 6l-2 1zm2 10l-1-2h7zm-5.3 3.3L5 19l1.7-3.7l1.6.5zm8.6-2L19 19l-3.7-1.7l.5-1.6zM6.7 8.7L5 5l3.7 1.7l-.5 1.5zm8.6-2L19 5l-1.7 3.7l-1.6-.5z" /></svg>
      </div>

      <!-- Map pin/region marker on bottom left -->
      <div class="pointer-events-none absolute bottom-10 left-32 hidden opacity-5 lg:block xl:left-48">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M22 10v-.783c0-1.94 0-2.909-.586-3.512c-.586-.602-1.528-.602-3.414-.602h-2.079c-.917 0-.925-.002-1.75-.415L10.84 3.021c-1.391-.696-2.087-1.044-2.828-1.02S6.6 2.418 5.253 3.204l-1.227.716c-.989.577-1.483.866-1.754 1.346C2 5.746 2 6.33 2 7.499v8.217c0 1.535 0 2.303.342 2.73c.228.285.547.476.9.54c.53.095 1.18-.284 2.478-1.042c.882-.515 1.73-1.05 2.785-.905c.884.122 1.705.68 2.495 1.075M8 2v15m7-12v4.5" /><path d="M18.308 21.684A1.18 1.18 0 0 1 17.5 22c-.302 0-.591-.113-.808-.317c-1.986-1.87-4.646-3.96-3.349-6.993C14.045 13.05 15.73 12 17.5 12s3.456 1.05 4.157 2.69c1.296 3.03-1.358 5.13-3.349 6.993M17.5 16.5h.009" /></g></svg>
      </div>

      <article class="prose relative mx-auto max-w-prose dark:prose-invert prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
        <slot />
        <div class="mt-4 text-right text-sm text-muted-foreground">
          <i>Postado por Amanda Leão - <time :datetime="date">{{ formattedDate }}</time></i>
        </div>
      </article>
    </div>
  </main>
</template>
