import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DATA from './webs.json';
import './App.css';

const EDUCACION = DATA.educacion;
const INFORMATICA = DATA.informatica;
const CIENCIA = DATA.ciencia;
const COMPRAS = DATA.compras;
const DEPORTES = DATA.deportes;
const ENTRETENIMIENTO = DATA.entretenimiento;
const ECONOMIA = DATA.economia;

class ControlledExpansionPanels extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { expanded } = this.state;

        return (
            <div>
                {EDUCACION.map(e =>

                <ExpansionPanel key={e.id} expanded={expanded === 'panel'+e.id} onChange={this.handleChange('panel'+e.id)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{e.nombre}</Typography>
                        <Typography className="idioma">{e.idioma}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {e.descripcion}
                        </Typography>
                        <Typography>
                            <a href={e.url}>{e.url}</a>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                )}
            </div>
        );
    }
}

export default ControlledExpansionPanels;
