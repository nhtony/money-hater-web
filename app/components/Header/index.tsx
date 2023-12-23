import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between justify-items-center">
        <div>
          <p className="text-sm">Tổng tài sản:</p>
          <p className="text-lg">1000.000.000.000 đ</p>
        </div>
        <div>
          <Image
            className="rounded-full"
            src="https://i.pravatar.cc/300"
            width={40}
            height={40}
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
