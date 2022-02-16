import { FunctionComponent } from "react";

interface BadgeComponentProps {
  title: string;
  className?: string;
}

const BadgeComponent: FunctionComponent<BadgeComponentProps> = (props) => {
  const { title, className = "" } = props;
  return (
    <div className={`p-1 inline-block bg-slate-200 rounded ${className}`}>
      {title}
    </div>
  );
};

export default BadgeComponent;
