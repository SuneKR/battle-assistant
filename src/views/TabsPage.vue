<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="batllemap" href="/tabs/battlemap">
          <ion-icon aria-hidden="true" :icon="gridOutline" />
          <ion-label>Battlemap</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tokens" href="/tabs/tokens">
          <ion-icon aria-hidden="true" :icon="radioButtonOff" />
          <ion-label>Tokens</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="bugs" href="/tabs/bugs">
          <ion-icon aria-hidden="true" :icon="bugOutline" />
          <ion-label>Report</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { bugOutline, ellipse, grid, gridOutline, radioButtonOff, radioButtonOn, square, triangle } from 'ionicons/icons';
</script>
