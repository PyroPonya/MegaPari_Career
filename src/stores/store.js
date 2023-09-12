import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('Store', () => {
  const data = ref([
    {
      id: 'Marketing',
      list: [
        {
          id: 'Chief Marketing Officer',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
        {
          id: 'Head of Marketing / Marketing Director',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
        {
          id: 'Marketing Producer',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
        {
          id: 'Lead User Acquisition Manager',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
        {
          id: 'Senior User Acquisition Manager / Senior Performance Marketing Manager',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
      ],
    },
    {
      id: 'Management',
      list: [
        {
          id: 'Executive Technical Director',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
        {
          id: 'Product Director',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
        {
          id: 'Development Director',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
        {
          id: 'Project Manager',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
        {
          id: 'Senior Project Manager (Marketing)',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
      ],
    },
    {
      id: 'Business Development',
      list: [
        {
          id: 'Business Development Director',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
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
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
        {
          id: 'Lead QA Engineer',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
        {
          id: 'Senior QA Engineer',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
        },
        {
          id: 'Middle QA Engineer',
          desc: 'At Playrix, we pride ourselves on creating exceptional games that inspire millions of players around the world. As one of the top four mobile game publishers globally, we are known for our high-quality products and talented team of creative and dedicated individuals. We are currently looking for an exceptional Chief Marketing Officer who will be responsible for improving and expanding our complex user acquisition system. This role requires a strategic thinker with expertise in business, marketing, analytics, and technology who can lead the team and take us to new heights. As a values-driven company, we are seeking a seasoned professional who shares our culture and values, and who can inspire and motivate their team to deliver outstanding results. This is a fantastic opportunity for a top-tier marketing executive to join a dynamic and fast-paced company that is setting new standards in the mobile gaming industry. This role requires relocation from Russia and Belarus to one of our offices in Ireland, Cyprus, Serbia, Montenegro, Armenia, Kazakhstan, or remote work from other countries. Find out more here.',
          tasks: [
            'Devising a long-term user acquisition strategy',
            'Developing a strategy for marketing creatives',
            'Creating a system for marketing analytics and automation',
            'Strengthening relationships with key partners',
            'Leading a marketing team of 100+ people',
          ],
          reqs: [
            '5+ years of experience in performance marketing with a focus on mobile game development',
            '1+ years of experience working as a CMO or in a similar position',
            'Advanced knowledge of user acquisition platforms and channels, including Google Ads, Facebook Ads, Moloco, Liftoff, Ironsource, and Appolvin',
            'Strong understanding of the technical side of marketing as well as experience working with BI systems such as Tableau',
            "Bachelor's degree in computer science or equivalent experience",
            'Excellent English proficiency to effectively communicate with our global team and partners',
          ],
          format:
            "Remote or from one of the company's offices in Armenia, Cyprus, Ireland, Kazakhstan, Montenegro, Serbia, or Russia.",
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
