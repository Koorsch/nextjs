import Image from 'next/image';
import {notFound} from 'next/navigation';
import { getAll, getAllByType, getBySlug} from '@/lib/apiNew';

export async function generateStaticParams() {
    const pages = await getAll();
    const paths = pages.map((page) => {
      return { slug: page.slug };
    });
    return paths;
  }

  export async function generateMetadata({params}) {
    const { slug } = params;
    const data = await getBySlug(slug);
    console.table(this)
    return {
        title: data.name,
    }
}

export default async function ItemPage({params}) {
    const { slug } = params;
    const oneItem = await getBySlug(slug);
    // console.table(oneItem);

    // const {id, name, favouriteColor, age, image} = oneDog;

    return (
        <p>Hello World</p>
        // <figure className="grid grid-col items-center">
        //     <h1 className="text-3xl">{name.toUpperCase()}</h1>
        //     <p className="">{name} is {age} years old. Favorite color is: <span className='w-3 h-3 text-[#${favouriteColor}]'>{favouriteColor}</span></p>
        //     <Image
        //         src={image.url}
        //         alt={name}
        //         width={image.width}
        //         height={image.height}
        //         className="w-full md:w-1/2 xl:w-[600px]"
        //         sizes="(max-width: 768px) 100vw,
        //             (max-width: 1200px) 50vw,
        //             600px"
        //         priority={true}
        //     />
        // </figure>
    )
}