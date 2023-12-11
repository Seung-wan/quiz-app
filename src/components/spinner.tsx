export default function Spinner() {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      data-testid="container"
    >
      <div
        className="h-16 w-16 animate-spin rounded-[50%] border-[6px] border-[#fff] border-t-[#FF5539]"
        data-testid="spinner"
      />
    </div>
  );
}
