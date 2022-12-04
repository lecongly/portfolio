import Image from 'next/image';

type Props = {
    imageUrl: string;
    description?: string;
};
const UserFlow = ({imageUrl, description}: Props) => {
    return (
        <section className="mt-12" id="user_flow">
            <h2 className="text-3xl font-bold mb-3">User flow</h2>
            {description && <p className="leading-7 mb-3">{description}</p>}
            <Image
                src={imageUrl}
                alt={imageUrl}
                width={1024}
                height={720}
                quality={100}
                className="aspect-video border-2 object-contain  mx-auto"
            />
        </section>
    );
};
export default UserFlow;