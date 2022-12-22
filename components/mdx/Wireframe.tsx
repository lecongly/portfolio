import Image from 'next/image';

type Props = {
    frame: Frame[];
    type: Type;
};

enum Type {
    MOBILE = 'mobile',
    WEB = 'web',
}

type Frame = {
    image: string;
    imageTitle: string;
};

const Wireframe = ({frame, type}: Props) => {
    return (
        <section className="mt-6 text-zinc-900 dark:text-zinc-100" id="wireframes">
            <h2 className="text-3xl font-bold mb-3">Wireframes</h2>
            <div>
                {frame.map((wireframe, i) => (
                    <div key={i}>
                        <h3 className="text-center py-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                            {wireframe.imageTitle}
                        </h3>
                        {type === Type.MOBILE ? (
                            <Image
                                src={wireframe.image}
                                alt={wireframe.image}
                                width={1024}
                                height={492}
                                quality={100}
                                className="mx-auto object-contain"
                            />
                        ) : (
                            <Image
                                src={wireframe.image}
                                alt={wireframe.image}
                                width={1024}
                                height={720}
                                quality={100}
                                className="mx-auto object-contain border rounded-lg object-cover"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Wireframe;