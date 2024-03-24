import { BusyIndicator, BusyIndicatorSize } from "@ui5/webcomponents-react";

export default function HomeLoading() {
  return (
    <div>
      <BusyIndicator active size={BusyIndicatorSize.Large} delay={0} />
    </div>
  );
}
