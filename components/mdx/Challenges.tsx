type Props = {
    principal: string;
    specifics?: Array<string>;
};

const Challenges = ({principal, specifics}: Props) => (
    <section className="my-12" id="challenges">
        <h2 className="text-3xl font-bold mb-3">Challenges</h2>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div>
                <h3 className="text-xl font-semibold">Principal</h3>
                <p className="text-base leading-7 mt-3">{principal}</p>
            </div>
            {specifics && (
                <div className="xs:mt-6 sm:xs:mt-0 md:xs:mt-0 lg:xs:mt-0 xl:xs:mt-0">
                    <h3 className="text-xl font-semibold">Specifics</h3>
                    <ul>
                        {specifics.map((text, i) => (
                            <li className="text-base leading-7 my-3 last:mb-0 list-inside list-decimal" key={i}>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </section>
);

export default Challenges;