import Card from "@/components/card";
import CardMenu from "@/components/card/CardMenu";
import Switch from "@/components/switch";

function Notification() {
  return (
    <Card className={"w-full h-full p-3"}>
      <div className="relative mb-3 flex items-center justify-between pt-1">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Notifications
        </h4>
        <CardMenu />
      </div>
      <div className="flex flex-col">
        {/* the custom checkbox desing added in src/index.js */}
        <div className="mt-3 flex items-center gap-3">
          <Switch id="switch1" />
          <label htmlFor="switch1" className="text-base font-medium text-navy-700 dark:text-white cursor-pointer" >
            Item comment notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch2" />
          <label htmlFor="switch2" className="text-base font-medium text-navy-700 dark:text-white cursor-pointer" >
            Buyer review notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch3" />
          <label htmlFor="switch3" className="text-base font-medium text-navy-700 dark:text-white cursor-pointer" >
            Rating reminders notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch4" />
          <label htmlFor="switch4" className="text-base font-medium text-navy-700 dark:text-white cursor-pointer" >
            Meetups near you notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch5" />
          <label htmlFor="switch5" className="text-base font-medium text-navy-700 dark:text-white cursor-pointer" >
            Company news notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch6" />
          <label htmlFor="switch6" className="text-base font-medium text-navy-700 dark:text-white cursor-pointer" >
            New launches and projects
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch7" />
          <label htmlFor="switch7" className="text-base font-medium text-navy-700 dark:text-white cursor-pointer" >
            Monthly product changes
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label htmlFor="switch8" className="text-base font-medium text-navy-700 dark:text-white cursor-pointer" >
            Subscribe to newsletter
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch9" />
          <label htmlFor="switch9" className="text-base font-medium text-navy-700 dark:text-white cursor-pointer" >
            Email me when someone follows me
          </label>
        </div>
      </div>
    </Card>
  );
}

export default Notification;
