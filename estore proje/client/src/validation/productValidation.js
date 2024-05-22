import * as yup from 'yup';

const productSchema = yup.object().shape({
    img: yup.string().required('URL is required'),
    title: yup.string().min(3).required('Title must be at least 6 characters'),
    price: yup.string()
      .min(2, 'Price is required')
      .required(),

  });

  export default productSchema;