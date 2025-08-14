import { createRouter, createWebHistory } from 'vue-router'
import LiveMatchesView from '@/views/LiveMatchesView.vue'
import TeamStatistic from '@/views/TeamStatistic.vue'
import TeamOverView from '@/views/TeamOverView.vue'
import TeamMatches from '@/views/TeamMatches.vue'
import TeamStandings from '@/views/TeamStandings.vue'
import MatchDetail from '@/views/MatchDetail.vue'
import MatchH2h from '@/views/MatchH2h.vue'
import MatchInfo from '@/views/MatchInfo.vue'
import NewsView from '@/views/NewsView.vue'
import Detail from '@/components/news/Detail.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'live-score',
      component: LiveMatchesView,
    },
    {
      path: '/team/:teamId',
      name: 'team-details',
      component: TeamStatistic,
      children: [
        {
          path: '',
          name: 'team-overview',
          component: TeamOverView,
        },
        {
          path: 'matches',
          name: 'team-matches',
          component: TeamMatches,
        },
        {
          path: 'standings',
          name: 'team-standings',
          component: TeamStandings,
        }
      ],
    },
    {
      path: '/match/:fixtureId',
      name: 'match-details',
      component: MatchDetail,
      children: [
        {
          path: '',
          name: 'match-info',
          component: MatchInfo,
        },
        {
          path: 'h2h',
          name: 'match-details-view',
          component: MatchH2h,
        }
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: Detail,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    }
  ],
})

export default router
