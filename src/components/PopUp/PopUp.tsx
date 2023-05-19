import { FunctionComponent } from "react";

enum NotificationType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

type Props = {
  title: string;
  message: string;
  type: NotificationType;
};

const styleByNotificationType = new Map<NotificationType, string>();
styleByNotificationType.set(NotificationType.SUCCESS, "");
styleByNotificationType.set(NotificationType.ERROR, "");
styleByNotificationType.set(NotificationType.WARNING, "");

export const PopUp: FunctionComponent<Props> = ({ title, message }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{message}</p>
    </div>
  );
};
