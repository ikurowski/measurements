import * as Yup from 'yup';

const measurementsValidationSchema = Yup.object({

  neck: Yup.number().min(1, 'Neck value must be greater than 1').max(500, 'Neck value must be less than 500').required('Neck value required'),
  chest: Yup.number().min(1, 'Chest value must be greater than 1').max(500, 'Chest value must be less than 500').required('Chest value required'),
  biceps: Yup.number().min(1, 'Biceps value must be greater than 1').max(500, 'Biceps value must be less than 500').required('Biceps value required'),
  waist: Yup.number().min(1, 'Waist value must be greater than 1').max(500, 'Waist value must be less than 500').required('Waist value required'),
  thigh: Yup.number().min(1, 'Thigh value must be greater than 1').max(500, 'Thigh value must be less than 500').required('Thigh value required'),
  calf: Yup.number().min(1, 'Calf value must be greater than 1').max(500, 'Calf value must be less than 500').required('Calf value required'),

});

export default measurementsValidationSchema;
