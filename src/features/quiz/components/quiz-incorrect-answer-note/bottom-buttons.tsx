interface BottomButtonsProps {
  prevDisabled: boolean;
  nextDisabled: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
}

export default function BottomButtons({
  prevDisabled,
  nextDisabled,
  onClickPrev,
  onClickNext,
}: BottomButtonsProps) {
  return (
    <div className="flex gap-2">
      <button
        className="flex-1 bg-black p-2 text-white disabled:bg-gray-300"
        onClick={onClickPrev}
        type="button"
        disabled={prevDisabled}
      >
        이전
      </button>
      <button
        className="flex-1 bg-black p-2 text-white disabled:bg-gray-300"
        onClick={onClickNext}
        type="button"
        disabled={nextDisabled}
      >
        다음
      </button>
    </div>
  );
}
