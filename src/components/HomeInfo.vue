<template>
  <div pr-6>
    <div mb-2>
      <div hstack>
        <div
          class="inline-block w-11 h-11 bg-label rounded-sm hover:shadow-inbox-sm"
          @click="toggleCheatInput"
        >
          <img src="/images/hero.png" />
        </div>
        <div class="label relative flex-1 ml-2.5 text-[22px]">
          <input
            v-show="cheat"
            v-model="cheatCode"
            class="absolute outline-none bg-label border border-white rounded w-[180px] h-7.5 inset-0 m-auto px-1"
            @keyup.enter="checkCheatCode"
          />
          去找简历吧勇士
        </div>
      </div>

      <div mt-2 space-y-1>
        <div hstack space-x-1>
          <div
            class="label w-15"
            :class="[
              'label w-15',
              success && '!bg-rose-400 hover:shadow-inbox cursor-pointer'
            ]"
            @click="exchange"
          >
            {{ success ? "兑换" : "收集" }}
          </div>
          <template v-for="(item, index) in store.hero.resumes">
            <PackageItem
              v-if="index < 4"
              :key="index"
              :item="item"
              :index="index"
              type="resumes"
            />
          </template>
        </div>

        <div pl-4 grid grid-cols-5 gap-1>
          <template v-for="(item, index) in store.hero.resumes">
            <PackageItem
              v-if="index >= 4"
              :key="index"
              :item="item"
              :index="index"
              type="resumes"
            />
          </template>
        </div>
      </div>
    </div>

    <div hstack space-x-2>
      <div class="label w-15">梦想</div>
      <div class="text-rose-400 text-lg">{{ store.hp }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cheatGame } from "~/core";
import { PERSONAL } from "~/core/data";

const store = useHeroStore();

// 集齐了所有简历碎片（且 hp > 0），则可以兑换完整版简历
const success = ref(false);

watch(store.hero.resumes, () => (success.value = store.hero.resumes.every((i) => i)));

// 兑换完整版简历
const exchange = () => success.value && window.open(PERSONAL.CV_LINK);

// 作弊码弹窗
const cheat = ref(false);
const cheatCode = ref("");

const toggleCheatInput = () => {
  cheat.value = !cheat.value;
  cheatCode.value = "";
};

// 作弊码判定
const checkCheatCode = () => {
  if (cheatCode.value == "something for nothing") cheatGame();
  else cheatCode.value = "作弊码错误！";
};
</script>

<style scoped>
.label {
  @apply h-11 bg-label rounded-sm text-white text-center leading-11;
}
</style>
