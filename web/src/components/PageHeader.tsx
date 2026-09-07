type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  return <h1 className="text-3xl font-bold mb-6 px-6 pt-6">{title}</h1>
}
