<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tokens</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tokens</ion-title>
        </ion-toolbar>
      </ion-header>

      <TokensList/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import TokensList from '@/components/TokensList.vue'
</script>
