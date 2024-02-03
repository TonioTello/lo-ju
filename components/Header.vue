<script setup lang="ts">
import type { Bounded } from "#build/components";
import { useSettings } from "~/composable/useSettings";

const settings = useSettings();
</script>

<template>
  <Bounded as="header" class="!py-4 md:!py-6 lg:!py-8">
    <div class="flex gap-4 items-center justify-between flex-col sm:flex-row">
      <Logo style="width: 10%"></Logo>
      <nav>
        <ul class="flex">
          <li v-for="item of settings?.data.navigation" :key="item.label ?? ''">
            <PrismicLink :field="item.link" class="p-4">
              {{ item.label }}
            </PrismicLink>
          </li>
        </ul>
      </nav>
    </div>
  </Bounded>
</template>
