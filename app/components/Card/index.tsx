import "./card.css";

interface CardProps {
  title: string;
  total: string | number;
  listItems?: any;
}

const Card = (props: CardProps) => {
  const { title, total, listItems } = props;
  return (
    <div className="py-3 h-32 mb-4 rounded shadow-md bg-white">
      <div className="h-full px-3 flex flex-col justify-between justify-items-center">
        <div className="flex justify-between items-center">
          <p>{title}</p>
          <p>{total} vnd</p>
        </div>

        <ul className="flex items-center overflow-x-scroll no-scrollbar pb-1">
          {listItems?.map((item: any) => {
            const { Name, Amount } = item;
            return (
              <li key={item.Name} className="flex items-center pr-3">
                <div className="text-[12px] text-nowrap">
                  <p className="font-medium">{Name}</p>
                  <span>{Amount} vnd</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
