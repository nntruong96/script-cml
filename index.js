export const ownerShipDisputeColor = 'rgba(254, 74, 62, 0.8)';
export const ownerShipDisputeOutlineColor = 'rgba(254, 74, 62, 1)';
export const boundaryDisputeColor = 'rgba(251, 255, 72, 0.8)';
export const boundaryDisputeOutlineColor = 'rgba(254, 223, 62, 1)';
export const TYPE_SOURCE = {
    default: {
        fill: {
            paint: {
                'fill-color': 'rgba(42, 184, 73, 0.65)', // blue color fill,
                'fill-opacity': 0.8,
            },
        },
        outline: {
            paint: {
                'line-width': 1,
                'line-color': 'rgba(123, 231, 147, 1)',
            },
        },
        circle: {
            paint: {
                'circle-radius': 4,
                'circle-color': 'rgba(58, 151, 173, 1)',
                'circle-stroke-width': 1,
                'circle-stroke-color': 'rgba(123, 231, 147, 1)',
            },
        },
    },
    default_can_select: {
        fill: {
            paint: {
                // 'fill-color': 'rgba(42, 184, 73, 0.65)', // blue color fill,
                'fill-color': [
                    'case',
                    ['boolean', ['feature-state', 'click'], false],
                    'rgba(58, 151, 173, 1)',
                    'rgba(42, 184, 73, 0.65)',
                ],
                'fill-opacity': [
                    'case',
                    ['boolean', ['feature-state', 'click'], false],
                    1,
                    0.8,
                ],
            },
        },
        outline: {
            paint: {
                'line-width': 1,
                'line-color': 'rgba(123, 231, 147, 1)',
            },
        },
        circle: {
            paint: {
                'circle-radius': 4,
                'circle-color': 'rgba(58, 151, 173, 1)',
                'circle-stroke-width': 1,
                'circle-stroke-color': 'rgba(123, 231, 147, 1)',
            },
        },
    },
    selected: {
        fill: {
            paint: {
                'fill-color': 'rgba(58, 151, 173, 1)', // blue color fill,
                'fill-opacity': 0.8,
            },
        },
        outline: {
            paint: {
                // 'line-color': '#7BE793',
                'line-width': 1,
                'line-color': 'rgba(123, 231, 147, 1)',
            },
        },
    },
    fill_by_color_properties: {
        fill: {
            paint: {
                'fill-opacity': [
                    'case',
                    ['has', 'fillOpacity'],
                    ['get', 'fillOpacity'],
                    0.8,
                ],
                'fill-color': { type: 'identity', property: 'color' },
            },
        },
        outline: {
            paint: {
                // 'line-color': '#7BE793',
                'line-width': 1,
                'line-color': [
                    'case',
                    ['has', 'outlineColor'],
                    ['get', 'outlineColor'],
                    'rgba(123, 231, 147, 1)',
                ],
            },
        },
    },
    set_color_properties: {
        fill: {
            paint: {
                'fill-opacity': [
                    'case',
                    ['has', 'fillOpacity'],
                    ['get', 'fillOpacity'],
                    0.8,
                ],
                'fill-color': ['get', 'fillColor'], //{ type: 'identity', property: 'fillColor' },
            },
        },
        outline: {
            paint: {
                'line-width': [
                    'case',
                    ['has', 'lineWidth'],
                    ['get', 'lineWidth'],
                    1,
                ],
                'line-color': ['get', 'outlineColor'],
            },
        },
    },
};
const TYPE_LINE = {
    white_dasharray: {
        line: {
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': '#ffffff',
                'line-width': 1,
                'line-dasharray': [2, 2, 2, 2],
            },
        },
    },
    white: {
        line: {
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': '#ffffff',
                'line-width': 1,
            },
        },
    },
    set_color_properties: {
        line: {
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': ['get', 'lineColor'],
                'line-width': 1,
            },
        },
    },
};
const TYPE_POINT = {
    green_white: {
        circle: {
            paint: {
                'circle-radius': 6,
                'circle-color': '#2AB848',
                'circle-stroke-width': 1,
                'circle-stroke-color': '#FFFFFF',
            },
        },
    },
    blue_white: {
        circle: {
            paint: {
                'circle-radius': 6,
                'circle-color': '#267385',
                'circle-stroke-width': 1,
                'circle-stroke-color': '#FFFFFF',
            },
        },
    },
    uploaded: {
        circle: {
            paint: {
                'circle-radius': 4,
                'circle-color': 'rgba(255, 255, 255, 1)',
                'circle-stroke-width': 1,
                'circle-stroke-color': 'rgba(123, 231, 147, 1)',
            },
        },
    },
    selected: {
        circle: {
            paint: {
                'circle-radius': 8,
                'circle-color': 'rgba(255, 255, 255, 1)',
                'circle-stroke-width': 1,
                'circle-stroke-color': 'rgba(123, 231, 147, 1)',
            },
        },
    },
    default: {
        circle: {
            paint: {
                'circle-radius': 4,
                'circle-color': 'rgba(58, 151, 173, 1)',
                'circle-stroke-width': 1,
                'circle-stroke-color': 'rgba(123, 231, 147, 1)',
            },
        },
    },
    set_color_properties: {
        circle: {
            paint: {
                'circle-radius': [
                    'case',
                    ['has', 'circleRadius'],
                    ['get', 'circleRadius'],
                    8,
                ],
                'circle-color': ['get', 'circleColor'],
                'circle-stroke-width': [
                    'case',
                    ['has', 'circleStrokeWidth'],
                    ['get', 'circleStrokeWidth'],
                    2,
                ],
                'circle-stroke-color': ['get', 'circleStrokeColor'],
            },
        },
    },
};

export const PLOTS_STATUS = [
    {
        value: 0,
        label: 'Free & Clear',
    },
    {
        value: 1,
        label: 'Pending',
    },
    {
        value: 2,
        label: 'Ownership Dispute',
    },
    {
        value: 3,
        label: 'Boundary Dispute',
    },
    {
        value: 4,
        label: 'Locked',
    },
    {
        value: 5,
        label: 'Default',
    },
    {
        value: 6,
        label: 'Disputed',
    },
];

export const CLAIM_RANK = [
    {
        value: 0,
        label: 'Pending',
    },
    {
        value: 1,
        label: 'Very Poor',
    },
    {
        value: 2,
        label: 'Ok',
    },
    {
        value: 3,
        label: 'Good',
    },
    {
        value: 4,
        label: 'Excellent',
    },
];

export const getColors = ({ numberClaimchain, overlap }) => {
    if (overlap) {
        return {
            fillColor: 'rgba(251, 255, 72, 0.3)',
            outlineColor: 'rgba(254, 223, 62, 1)',
            iconName: 'boundaryDispute',
            iconSize: 0.2,
        };
    }
    if (numberClaimchain === 1) {
        return {
            fillColor: 'rgba(42, 184, 73, 0.4)',
            outlineColor: 'rgba(123, 231, 147, 1)',
        };
    }
    if (numberClaimchain < 10) {
        return {
            fillColor: 'rgba(42, 184, 73, 1)',
            outlineColor: 'rgba(123, 231, 147, 1)',
            circleColor: 'rgba(123, 231, 147, 1)',
            circleStrokeColor: 'white',
            iconName: 'claimchain',
            iconSize: 0.2,
            lineColor: 'white',
        };
    }
    if (numberClaimchain < 50) {
        return {
            fillColor: 'rgba(42, 184, 73, 0.9)',
            outlineColor: 'rgba(123, 231, 147, 1)',
            circleColor: 'rgba(123, 231, 147, 1)',
            circleStrokeColor: 'white',
            iconName: 'claimchain',
            iconSize: 0.2,
            lineColor: 'white',
        };
    }
};
export const getPlotStatus = ({ numberClaimchain, plot, worthwhileNumber }) => {
    if (plot?.isOwnershipDispute) {
        return 2;
    }
    if (plot?.isBoundaryDispute) {
        return 3;
    }
    if (plot?.isLocked) {
        return 4;
    }
    if (plot?.isDefault) {
        return 5;
    }
    if (plot?.isDisputed) {
        return 6;
    }
    if (numberClaimchain < worthwhileNumber) {
        return 1;
    }
    return 0;
};
export const initPlot = (plot, index) => {
    if (!plot) return null;
    return {
        ...plot.geojson,
        properties: {
            name: plot.name,
            placeName: plot.placeName,
            area: plot.area,
            id: plot.id,
            _id: plot._id,
            ...plot.properties,
        },
        id: index + 1,
    };
};

export const initPoint = (coordinates) => {
    if (Array.isArray(coordinates)) {
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: coordinates,
            },
            properties: {
                coordinates,
            },
        };
    }
    return {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: coordinates.coordinates,
        },
        properties: {
            coordinates: coordinates.coordinates,
            ...coordinates.properties,
        },
    };
};
export const initLine = (coordinates) => {
    if (Array.isArray(coordinates)) {
        return {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: coordinates,
            },
        };
    }
    return {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: coordinates.coordinates,
        },
        properties: {
            coordinates: coordinates.coordinates,
            ...coordinates.properties,
        },
    };
};
export const initSource = ({
    plots = [],
    points = [],
    lines = [],
    type = 'default',
    lineType = type,
    pointType = type,
    id,
    symbol = false,
    disabledClick = false,
}) => {
    let source = JSON.parse(
        JSON.stringify({
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [],
            },
            id,
            symbol,
            disabledClick,
        })
    );
    plots?.forEach((plot, index) => {
        let polygon = initPlot(plot, index);
        source.data.features.push(polygon);
    });

    points?.forEach((point) => {
        let marker = initPoint(point);
        source.data.features.push(marker);
    });
    lines?.forEach((line) => {
        let l = initLine(line);
        source.data.features.push(l);
    });
    source = { ...source };
    if (TYPE_SOURCE[type]) {
        source = { ...source, ...TYPE_SOURCE[type] };
    }
    if (TYPE_LINE[lineType]) {
        source = { ...source, ...TYPE_LINE[lineType] };
    }
    if (TYPE_POINT[pointType]) {
        source = { ...source, ...TYPE_POINT[pointType] };
    }
    return source;
};
