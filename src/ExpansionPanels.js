import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Snackbar from '@material-ui/core/Snackbar';
import ErrorIcon from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/core/styles';
import './ExpansionPanel.css';

const styles = {
    root: {
        backgroundColor: '#d32f2f'
    }
};

class ControlledExpansionPanels extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: null,
            seccionPrev: '',
            open: false
        }
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const { expanded } = this.state;
        const { webs, searchWord, websLength, classes } = this.props;

        let errorMessage;

        if (searchWord && webs.length === websLength){
            errorMessage = <Snackbar
                ContentProps={{
                    classes: {
                        root: classes.root
                    }
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={!this.state.open}
                autoHideDuration={3000}
                message={
                    <span id="message-id" style={{display: 'flex', alignItems: 'center'}}>
                        <ErrorIcon/>
                        No se ha encontrado la web: {searchWord.toUpperCase()}
                    </span>
                }
                onRequestClose={this.handleRequestClose}
            />;
        }

        return (
            <div className="evita-menu">
            
                {
                    
                    webs.map( (e, index) =>
                        <div key={index}>
                            {
                                index > 0 ? e.tipo !== webs[index - 1].tipo ?
                                    <h4 className="titulo-tipo">{e.tipo.toUpperCase()}</h4> :
                                    null :
                                    <h4 className="titulo-tipo">{e.tipo.toUpperCase()}</h4>
                            }

                                <ExpansionPanel className="espacio" key={e.id} expanded={expanded === 'panel'+e.id} onChange={this.handleChange('panel'+e.id)}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                         {/* Ñapa sana */}
                                        <div style ={{display: "inline-flex" , alignItems: "center", width: "100%"}}>
                                            <Avatar style={{width: 32, height: 32, borderRadius: 10, marginRight: "10px"}} src={e.icono.url}></Avatar>
                                            <Typography>{e.nombre}</Typography>
                                            <span className={e.idioma === 'ES' ? "idiomaES" : "idiomaEN"}>{e.idioma}</span>
                                        </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className="detalles">
                                        <Typography>
                                            {e.descripcion}
                                            <br/><br/>
                                            <a href={e.url} target="_blank"><i class="far fa-arrow-alt-circle-right"></i> Ir a {e.nombre}</a>
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                        </div>
                    )
                }

                {
                    errorMessage
                }
            </div>
        );
    }
}

export default withStyles(styles)(ControlledExpansionPanels);