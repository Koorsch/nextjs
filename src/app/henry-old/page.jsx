import Image from 'next/image';
async function getHenry() {
    const res = await fetch('https://nice-dogs.vercel.app/api/dogs?slug=henry')
    return await res.json();
}
export async function generateMetadata() {
    const {name, age} = await getHenry();
    return {
        title: name,
        description: `${name} is ${age} years old`
    }
}
export default async function HenryPage() {
    const data = await getHenry();
    // console.log(data);
  return (
    <main className="bg-slate-200 flex flex-col">
        <h1>Hej {data.name}</h1>
        <div className="flex flex-col md:flex-row">
        <Image 
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
            alt="Cute Dog"
            width={3000}
            height={3000}
            className="w-full md:w-1/2 xl:w-[600px]"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   600px"
            priority={true}
        />
        <Image 
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
            alt="Cute Dog"
            width={3000}
            height={3000}
            className="w-full md:w-1/2 xl:w-[600px]"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   600px"
            priority={true}
        />
        <Image 
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
            alt="Cute Dog"
            width={3000}
            height={3000}
            className="w-full md:w-1/2 xl:w-[600px]"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   600px"
            priority={true}
        />
        </div>
    </main>
  )
}