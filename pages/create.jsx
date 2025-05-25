import BookForm from '@/components/BookForm';
import { defaultBookValues } from '@/utils/constants'
import { createBook } from '@/utils/booksFunctions';
import { useRouter } from 'next/router';
import React from 'react'

const Create = () => {
    const router = useRouter();
    const entry = defaultBookValues;

    const onSubmit = async (data) => {
        try {
            const response = await createBook(data);
            if(response) {
                router.push('/');
            }
        } catch(err) {
            console.log(err);
        }
    }
  return (
    <BookForm entry={entry} onSubmit={onSubmit} />
  )
}

export default Create