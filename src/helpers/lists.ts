export type listType = {
  name: string;
  type: 'bodyPart' | 'target' | 'equipment';
  imgUrl: '';
}[];

// checked
export const bodyPartList: listType = [
  { name: 'back', type: 'bodyPart', imgUrl: '' },
  { name: 'cardio', type: 'bodyPart', imgUrl: '' },
  { name: 'chest', type: 'bodyPart', imgUrl: '' },
  { name: 'lower arms', type: 'bodyPart', imgUrl: '' },
  { name: 'lower legs', type: 'bodyPart', imgUrl: '' },
  { name: 'neck', type: 'bodyPart', imgUrl: '' },
  { name: 'shoulders', type: 'bodyPart', imgUrl: '' },
  { name: 'upper arms', type: 'bodyPart', imgUrl: '' },
  { name: 'upper legs', type: 'bodyPart', imgUrl: '' },
  { name: 'waist', type: 'bodyPart', imgUrl: '' },
];
export const targetList: listType = [
  { name: 'abductors', type: 'target', imgUrl: '' },
  { name: 'abs', type: 'target', imgUrl: '' },
  { name: 'adductors', type: 'target', imgUrl: '' },
  { name: 'biceps', type: 'target', imgUrl: '' },
  { name: 'calves', type: 'target', imgUrl: '' },
  {
    name: 'cardiovascular system',
    type: 'target',
    imgUrl: '',
  },
  { name: 'delts', type: 'target', imgUrl: '' },
  { name: 'forearms', type: 'target', imgUrl: '' },
  { name: 'glutes', type: 'target', imgUrl: '' },
  { name: 'lats', type: 'target', imgUrl: '' },
  { name: 'levatorScapulae', type: 'target', imgUrl: '' },
  { name: 'pectorals', type: 'target', imgUrl: '' },
  { name: 'quads', type: 'target', imgUrl: '' },
  { name: 'serratusAnterior', type: 'target', imgUrl: '' },
  { name: 'spine', type: 'target', imgUrl: '' },
  { name: 'traps', type: 'target', imgUrl: '' },
  { name: 'triceps', type: 'target', imgUrl: '' },
  { name: 'upperBack', type: 'target', imgUrl: '' },
  { name: 'hamstrings', type: 'target', imgUrl: '' },
];
export const equipmentList: listType = [
  { name: 'assisted', type: 'equipment', imgUrl: '' },
  { name: 'band', type: 'equipment', imgUrl: '' },
  { name: 'barbell', type: 'equipment', imgUrl: '' },
  { name: 'bosu ball', type: 'equipment', imgUrl: '' },
  { name: 'cable', type: 'equipment', imgUrl: '' },
  { name: 'dumbbell', type: 'equipment', imgUrl: '' },
  { name: 'elliptical machine', type: 'equipment', imgUrl: '' },
  { name: 'ez barbell', type: 'equipment', imgUrl: '' },
  { name: 'body weight', type: 'equipment', imgUrl: '' },
  { name: 'hammer', type: 'equipment', imgUrl: '' },
  { name: 'kettlebell', type: 'equipment', imgUrl: '' },
  { name: 'leverage machine', type: 'equipment', imgUrl: '' },
  { name: 'olympic barbell', type: 'equipment', imgUrl: '' },
  { name: 'medicine ball', type: 'equipment', imgUrl: '' },
  { name: 'roller', type: 'equipment', imgUrl: '' },
  { name: 'resistance band', type: 'equipment', imgUrl: '' },
  { name: 'skierg machine', type: 'equipment', imgUrl: '' },
  { name: 'rope', type: 'equipment', imgUrl: '' },
  { name: 'sled machine', type: 'equipment', imgUrl: '' },
  { name: 'stability ball', type: 'equipment', imgUrl: '' },
  { name: 'smith machine', type: 'equipment', imgUrl: '' },
  { name: 'stepmill machine', type: 'equipment', imgUrl: '' },
  { name: 'stationary bike', type: 'equipment', imgUrl: '' },
  { name: 'wheel roller', type: 'equipment', imgUrl: '' },
  { name: 'tire', type: 'equipment', imgUrl: '' },
  { name: 'trap bar', type: 'equipment', imgUrl: '' },
  { name: 'weighted', type: 'equipment', imgUrl: '' },
  {
    name: 'upper body ergometer',
    type: 'equipment',
    imgUrl: '',
  },
];
