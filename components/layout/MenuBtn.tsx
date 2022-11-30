interface Props {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
}

const MenuBtn = ({isOpen, setIsOpen}: Props) => {

    return (
        <div
            className="h-9 w-9 cursor-pointer  flex items-center justify-center ml-4 "
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={`before:duration-300 after:duration-300 relative w-full h-1 ${
                    !isOpen
                        ? 'before:content[]  before:absolute before:w-full before:h-0.5 before:bg-black before:dark:bg-white before:-translate-y-1 after:content[] after:absolute after:right-0 after:w-10/12 after:bg-black after:dark:bg-white after:h-0.5 after:translate-y-1'
                        : 'before:content[]  before:absolute before:w-full before:h-0.5 before:bg-black before:dark:bg-white before:-rotate-45 after:content[] after:absolute after:w-full after:bg-black after:dark:bg-white after:h-0.5 after:rotate-45'
                }`}
            />
        </div>
    );
};

export default MenuBtn;