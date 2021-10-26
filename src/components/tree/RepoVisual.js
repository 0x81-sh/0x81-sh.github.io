import Tree from "react-animated-tree";
import {Panel, TagGroup, Tag, IconButton, toaster, Notification} from "rsuite";
import BranchIcon from '@rsuite/icons/Branch';
import CodeIcon from '@rsuite/icons/Code';
import PinIcon from '@rsuite/icons/Pin';
import CalendarIcon from '@rsuite/icons/Calendar';
import styles from "../../styles/global.module.css"
import CopyIcon from '@rsuite/icons/Copy';
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import ProjectIcon from '@rsuite/icons/Project';

const copyCloneURL = (data) => {
    return () => {
        navigator.clipboard.writeText(data.clone_url);
        toaster.push(
            <Notification type="success" header="Copied URL to clipboard"/>,
            {
                placement: 'topEnd'
            }
        )
    }
}

const downloadZIP = (data) => {

}

const RepoVisual = ({data, displayName}) => {
    return <Tree type="[REPO]" content={displayName}>
        <Panel bordered className={styles.panelStyle}>
            <div className={styles.flexDiv}>
                <div>
                    <TagGroup>
                        <Tag>
                            <BranchIcon/> &nbsp;
                            {data.default_branch}
                        </Tag>
                        <Tag>
                            <CodeIcon/> &nbsp;
                            {data.language}
                        </Tag>
                        <Tag>
                            <PinIcon/> &nbsp;
                            {`Is ${data.archived ? "" : "not" } archived`}
                        </Tag>
                        <Tag>
                            <CalendarIcon/> &nbsp;
                            Created {new Date(data.created_at).toLocaleString()}
                        </Tag>
                    </TagGroup>

                    {data.description === null ? "" : <>
                        <br/>
                        <i> {data.description} </i>
                    </>}
                </div>

                <div>
                    <IconButton className={styles.buttonSpace}
                                placement="left"
                                icon={<CopyIcon/>}
                                appearance="ghost"
                                onClick={copyCloneURL(data)}
                                size="xs">
                        Clone
                    </IconButton>
                    <IconButton className={styles.buttonSpace}
                                appearance="ghost"
                                placement="left"
                                icon={<ProjectIcon/>}
                                href={data.html_url}
                                size="xs">
                        View
                    </IconButton>
                    <IconButton className={styles.buttonSpace}
                                appearance="ghost"
                                placement="left"
                                icon={<FileDownloadIcon/>}
                                onClick={downloadZIP(data)}
                                target="_blank"
                                href={data.archive_url}
                                size="xs">
                        Download
                    </IconButton>
                </div>
            </div>
        </Panel>
    </Tree>

}

/*
        <Tree content="Metadata">
            <Tree type={<BranchIcon fontSize={"1.7em"}/>} content={data.default_branch}/>
            <Tree type={<CodeIcon fontSize={"1.7em"}/>} content={data.language}/>
            <Tree type={<PinIcon fontSize={"1.7em"}/>} content={`Is ${data.archived ? "" : "not" } archived`}/>
            <Tree type={<CalendarIcon fontSize={"1.7em"}/>} content={`Created ${new Date(data.created_at).toLocaleString()}`}/>
        </Tree>
        <Tree content="Actions">
            <Tree type={<CopyIcon fontSize={"1.7em"}/>} content="Clone"/>
        </Tree>
 */

/*
clone_url
html_url
archive_url
 */

//<Tree type="[META]" content={`Is ${data.archived ? "" : "not" } archived`}/>

export default RepoVisual;