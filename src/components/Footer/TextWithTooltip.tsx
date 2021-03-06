interface ITextWithTooltip {
  tooltipLabel: string;
  value: number;
}

const TextWithTooltip = ({ tooltipLabel, value }: ITextWithTooltip) => {
  return (
    <span className='tooltip cursor-pointer px-1' data-tip={tooltipLabel}>
      {value.toLocaleString('id-ID')}
    </span>
  );
};

export default TextWithTooltip;
