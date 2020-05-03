import { ref, reactive } from '@vue/composition-api'

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
  const shotOptions = reactive([1, 5, 10])

  const selectedClubs = ref([])
  const confirmedClubs = ref([])

  const selectedAmountOfShots = ref(5)
  const confirmedShots = ref(0)

  const selectingClubs = ref(true)
  const selectingShots = ref(false)
  const showShotTracker = ref(false)

  const confirmClubSelection = () => {
    confirmedClubs.value = selectedClubs.value
    selectedClubs.value = []
    selectingClubs.value = false
    selectingShots.value = true
  }

  const confirmShotSelection = () => {
    confirmedShots.value = selectedAmountOfShots.value
    selectingShots.value = false
    showShotTracker.value = true
  }

  const reset = () => {
    selectingClubs.value = true
    selectingShots.value = false
    showShotTracker.value = false
  }

  return {
    options,
    selectedClubs,
    confirmClubSelection,
    confirmedClubs,
    selectingClubs,
    shotOptions,
    selectedAmountOfShots,
    selectingShots,
    showShotTracker,
    confirmedShots,
    confirmShotSelection,
    reset,
  }
}
