import {
	useActiveAlertsGeoJsonByEventQuery,
	useFakeAlerts,
} from "services/nws-api-web-service";

export const AlertSection = ({ alertComponent, event }) => {
	const AlertComponent = alertComponent;
	const { data: alerts } = useActiveAlertsGeoJsonByEventQuery(event);
	const fakeAlerts = useFakeAlerts(event);

	return (
		<section>
			<SectionTitle title={event} />
			<GridLayout>
				{alerts
					? alerts.map((alert) => (
							<AlertComponent key={alert.id} alert={alert} />
					  ))
					: null}
				{/* TODO: create "no active alerts" component */}
				{/* {fakeAlerts
          ? fakeAlerts.map((alert) => (
              <AlertComponent key={alert.id} alert={alert} />
            ))
          : null} */}
			</GridLayout>
		</section>
	);
};

const SectionTitle = ({ title }) => {
	return (
		<>
			<h2 className='font-display uppercase text-3xl mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-600'>
				{title}
			</h2>
		</>
	);
};

const GridLayout = ({ children }) => {
	return (
		<div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{children}
		</div>
	);
};
