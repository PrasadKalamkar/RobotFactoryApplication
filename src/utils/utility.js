export const checkQualityForExtinguish = (robots) => {

    let robotsToBeExtiguished = robots.filter(item => 
        item.configuration.hasSentience === true && 
        item.statuses.length > 0 && 
        item.statuses.includes("on fire"));      

    return robotsToBeExtiguished;
};

export const performCheckForRecycle = (robots) => {

    let robotsToBeRecycle = robots.filter(item => 
        (item.configuration.numberOfRotors < 3 || item.configuration.numberOfRotors > 8) ||
        (item.configuration.color === 'blue') || 
        (item.configuration.hasWheels === true && item.configuration.hasTracks === true) || 
        (item.configuration.hasWheels === true && item.statuses.includes("rusty")) ||
        (item.configuration.hasSentience === true && item.statuses.includes("loose screws")) ||
        item.statuses.includes("on fire")
        );       

    return robotsToBeRecycle;
};

export const findFactorySecondRobots = (robots) => {   

    let factorySecondRobots = robots.filter(item =>
        (item.qualityStatus !== undefined && item.qualityStatus.length === 0) &&
            item.statuses.includes("rusty") || item.statuses.includes("loose screws") || item.statuses.includes("paint scratched")               
        ); 

    return factorySecondRobots;
};

export const getFactorySecondRobots = (robots) => {

    let factorySecondRobots = robots.filter(item =>         
        item.qualityStatus.includes("FactorySecond"));     

    return factorySecondRobots;
};

export const getQualityPassedRobots = (robots) => {

    let qualityPassedRobots = robots.filter(item =>         
        item.qualityStatus.length === 0);     

    return qualityPassedRobots;
};

export const getReadyToShipRobots = (robots) => {

    let readyToShipRobots = robots.filter(item =>         
        item.shipmentStatus === "ShippingReady");      

    return readyToShipRobots;
};