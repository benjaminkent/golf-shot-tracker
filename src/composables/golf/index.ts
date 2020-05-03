import { ref, reactive, computed } from '@vue/composition-api'

interface Option {
  clubType: string
  clubs: string[]
}

export const useGolf = () => {
  const options: Option[] = reactive([
    {
      clubType: 'Woods',
      clubs: ['Driver', '3 Wood', '5 Wood'],
    },
    {
      clubType: 'Long Irons',
      clubs: ['3 Iron/Hybrid', '4 Iron/Hybrid', '5 Iron/Hybrid'],
    },
    {
      clubType: 'Irons',
      clubs: ['6 Iron', '7 Iron', '8 Iron'],
    },
    {
      clubType: 'Short Irons',
      clubs: ['9 Iron', 'Pitching Wedge', 'Approach Wedge'],
    },
    {
      clubType: 'Chipping',
      clubs: ['52 Degree', '56 Degree', '58 Degree', '60 Degree'],
    },
  ])
  const selectedClubs = ref([])
  const confirmedClubs = ref([])

  // const showConfirmedClubs = computed(() => confirmedClubs)

  const confirmClubSelection = () => {
    confirmedClubs.value = selectedClubs.value
    selectedClubs.value = []
  }

  return {
    options,
    selectedClubs,
    confirmClubSelection,
    confirmedClubs,
  }
}
