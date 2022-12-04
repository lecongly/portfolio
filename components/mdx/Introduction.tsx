import Image from 'next/image';

type Props = {
    title: string;
    imageUrl?: string;
    categories: Array<string>;
};

const Introduction = ({title, categories, imageUrl}: Props) => {
    return (
        <section id="introduction" className="pt-40 flex flex-col items-center justify-center">
            <div className="mb-3 text-zinc-500">
                {categories.map((category, i) => (
                    <span key={i} className="text-sm mx-1">
            {category}
          </span>
                ))}
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-tight mb-20">
                {title}
            </h1>

            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={imageUrl}
                    width={1024}
                    height={720}
                    quality={100}
                    className="aspect-video object-contain mx-auto"
                />
            )}
        </section>
    );
};

export default Introduction;