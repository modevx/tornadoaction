import { Page } from "../layout";
import { ALERT_TYPES } from "services/national_weather_service/config";
import { NationalWeatherServiceAlerts } from "../features";

const LiveDashboard = () => {
	return (
		<Page>
			<div className='grow flex flex-col mx-auto'>
				{/* -- DASHBOARD */}
				<div className='m-4 grow grid gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-5 md:grid-rows-2 md:gap-6 '>
					<div className='sm:col-span-2 md:col-span-3 bg-stone-800 flex flex-col justify-center text-center'>
						MAP
					</div>
					<div className='md:row-span-2 md:order-first bg-stone-800 flex flex-col justify-center text-center'>
						<h2 className='text-xl uppercase font-bold text-left'>
							Tornado Warnings
						</h2>
						<NationalWeatherServiceAlerts
							alertType={ALERT_TYPES.tornadoWarning}
							isTest={true}
						/>
					</div>
					<div className='md:row-span-2 bg-stone-800 flex flex-col justify-center text-center'>
						<h2 className='text-xl uppercase font-bold text-left'>
							Tornado Watches
						</h2>
						<NationalWeatherServiceAlerts
							alertType={ALERT_TYPES.tornadoWatch}
							isTest={true}
						/>
					</div>
					<div className='sm:col-span-2 md:col-span-3 bg-stone-800 flex flex-col justify-center text-center'>
						LOCAL STORM REPORTS
					</div>
				</div>
			</div>
		</Page>
	);
};

export default LiveDashboard;
