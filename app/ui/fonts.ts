import { Inter, Lusitana, Roboto, Pacifico } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400'
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });