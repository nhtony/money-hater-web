import { Card, Header, IconPlus, Navbar } from "./components";

const mockData = [
  {
    title: "Thu nhập",
    total: 100000000,
    listItems: [
      { Name: "Tháng 1", Amount: 100000 },
      { Name: "Tháng 2", Amount: 100000 },
      { Name: "Tháng 3", Amount: 100000 },
    ],
  },
  {
    title: "Chi tiêu",
    total: 100000000,
    listItems: [
      { Name: "Tết", Amount: 100000 },
      { Name: "Sinh nhật", Amount: 100000 },
    ],
  },
  {
    title: "Tiết kiệm",
    total: 100000000,
    listItems: [{ Name: "VCB", Amount: 100000 }],
  },
  {
    title: "Đầu tư",
    total: 100000000,
    listItems: [{ Name: "Vàng", Amount: 100000 }],
  },
  {
    title: "Đầu tư",
    total: 100000000,
    listItems: [{ Name: "Vàng", Amount: 100000 }],
  },
  {
    title: "Đầu tư",
    total: 100000000,
    listItems: [{ Name: "Vàng", Amount: 100000 }],
  },
];

export default function Home() {
  return (
    <div className="max-w-md mx-auto p-4 relative bg-slate-50">
      <Header />
      <div className="py-12">
        {mockData.map((item) => {
          return <Card key={item.title} {...item} />;
        })}
      </div>
      <Navbar />
    </div>
  );
}
