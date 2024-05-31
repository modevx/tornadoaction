import { Button } from "react-daisyui";
import {
  alertIsDestructiveStorm,
  alertIsPDS,
  alertIsTornadoEmergency,
} from "utils/nws-alerts";
import { NWS_ALERT_COLORS, NWS_STORM_SITUATIONS } from "constants/nws-alerts";

export const ActiveAlertCard = ({ alert, showAlertModalFunc }) => {
  const {
    areaDesc,
    description,
    effective,
    event,
    expires,
    instruction,
    senderName,
    parameters: { maxHailSize, tornadoDetection },
  } = alert?.properties;

  let situation = null;
  let situationColor = null;

  const isTornadoEmergency = alertIsTornadoEmergency(alert);
  const isPDS = alertIsPDS(alert);
  const isDestructiveStorm = alertIsDestructiveStorm(alert);

  if (isTornadoEmergency) {
    situation = NWS_STORM_SITUATIONS.tornado_emergency;
    situationColor = NWS_ALERT_COLORS.tornado_emergency;
  }
  if (isPDS) {
    situation = NWS_STORM_SITUATIONS.particularly_dangerous_situation;
    situationColor = NWS_ALERT_COLORS.particularly_dangerous_situation;
  }
  if (isDestructiveStorm) {
    situation = NWS_STORM_SITUATIONS.destructive_storm;
    situationColor = NWS_ALERT_COLORS.destructive_storm;
  }

  const alertColorMap = {
    "Tornado Warning": NWS_ALERT_COLORS.tornado_warning,
    "Tornado Watch": NWS_ALERT_COLORS.tornado_watch,
    "Severe Thunderstorm Warning": NWS_ALERT_COLORS.severe_storm_warning,
    "Severe Thunderstorm Watch": NWS_ALERT_COLORS.severe_storm_watch,
  };
  const alertColor = alertColorMap[event];

  return (
    <div
      style={{
        backgroundColor: alertColor,
      }}
      className="flex justify-between p-2 rounded text-black"
    >
      <div>
        <span className="font-bold text-sm">{senderName.slice(4)}</span>
        {/* {situation && (
          <div
            style={{ backgroundColor: situationColor }}
            className="text-xs p-2 rounded"
          >
            {situation}
          </div>
        )} */}
      </div>
      <Button
        size="sm"
        onClick={() =>
          showAlertModalFunc({
            alert: alert,
            color: situationColor ?? alertColor,
          })
        }
        style={{ backgroundColor: situationColor }}
      >
        Details
      </Button>
    </div>
  );
};
