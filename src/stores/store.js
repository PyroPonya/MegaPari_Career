import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('Store', () => {
  const data = ref([
    {
      id: 'Marketing',
      list: [
        {
          id: 'Chief Marketing Officer',
        },
        {
          id: 'Head of Marketing / Marketing Director',
        },
        {
          id: 'Marketing Producer',
        },
        {
          id: 'Lead User Acquisition Manager',
        },
        {
          id: 'Senior User Acquisition Manager / Senior Performance Marketing Manager',
        },
      ],
    },
    {
      id: 'Management',
      list: [
        {
          id: 'Executive Technical Director',
        },
        {
          id: 'Product Director',
        },
        {
          id: 'Development Director',
        },
        {
          id: 'Project Manager',
        },
        {
          id: 'Senior Project Manager (Marketing)',
        },
      ],
    },
    {
      id: 'Business Development',
      list: [
        {
          id: 'Business Development Director',
        },
      ],
    },
    {
      id: 'Marketing Creatives',
      list: [],
    },
    {
      id: 'Art',
      list: [],
    },
    {
      id: 'Administration',
      list: [],
    },
    {
      id: 'QA',
      list: [
        {
          id: 'QA Director',
        },
        {
          id: 'Lead QA Engineer',
        },
        {
          id: 'Senior QA Engineer',
        },
        {
          id: 'Middle QA Engineer',
        },
      ],
    },
    {
      id: 'Finance',
      list: [],
    },
    {
      id: 'Analytics',
      list: [],
    },
    {
      id: 'HR and Recruiting',
      list: [],
    },
    {
      id: 'Product Manager',
      list: [],
    },
    {
      id: 'Development',
      list: [],
    },
    {
      id: 'IT',
      list: [],
    },
    {
      id: 'Design',
      list: [],
    },
  ]);
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { data };
});
