import "../../css/Divider.css"
export const Divider = ({ text, className = "" }: { text: string; className?: string }) => {
  return <div className={`divider ${className}`}>{text}</div>
}
