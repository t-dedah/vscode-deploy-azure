import { PipelineConfiguration, TargetResourceType } from "../model/models";
import { AksAzureResourceSelector } from "./AksAzureResourceSelector";
import { IAzureResourceSelector } from "./IAzureResourceSelector";
import { WebAppAzureResourceSelector } from "./WebAppAzureResourceSelector";

export class ResourceSelectorFactory {

    public static getAzureResourceSelector(pipelineConfiguration: PipelineConfiguration): IAzureResourceSelector {
        switch (pipelineConfiguration.template.targetType) {
            case TargetResourceType.WebApp:
                return new WebAppAzureResourceSelector();
            case TargetResourceType.AKS:
                return new AksAzureResourceSelector();
            default:
                throw new Error("Not supported");
        }
    }
}