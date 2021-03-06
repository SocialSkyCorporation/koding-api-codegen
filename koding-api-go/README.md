# Go API client for swagger

Koding API for integrating your application with Koding services

## Overview
This API client was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [swagger-spec](https://github.com/swagger-api/swagger-spec) from a remote server, you can easily generate an API client.

- API version: 0.0.3
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.GoClientCodegen

## Installation
Put the package under your project folder and add the following in import:
```
    "./swagger"
```

## Documentation for API Endpoints

All URIs are relative to *https://koding.com/remote.api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CollaborationApi* | [**Add**](docs/CollaborationApi.md#add) | **Post** /Collaboration.add | 
*CollaborationApi* | [**Kick**](docs/CollaborationApi.md#kick) | **Post** /Collaboration.kick | 
*CollaborationApi* | [**Stop**](docs/CollaborationApi.md#stop) | **Post** /Collaboration.stop | 
*ComputeProviderApi* | [**Create**](docs/ComputeProviderApi.md#create) | **Post** /ComputeProvider.create | 
*ComputeProviderApi* | [**CreateGroupStack**](docs/ComputeProviderApi.md#creategroupstack) | **Post** /ComputeProvider.createGroupStack | 
*ComputeProviderApi* | [**FetchAvailable**](docs/ComputeProviderApi.md#fetchavailable) | **Post** /ComputeProvider.fetchAvailable | 
*ComputeProviderApi* | [**FetchProviders**](docs/ComputeProviderApi.md#fetchproviders) | **Post** /ComputeProvider.fetchProviders | 
*ComputeProviderApi* | [**Ping**](docs/ComputeProviderApi.md#ping) | **Post** /ComputeProvider.ping | 
*ComputeProviderApi* | [**Remove**](docs/ComputeProviderApi.md#remove) | **Post** /ComputeProvider.remove | 
*ComputeProviderApi* | [**SetGroupStack**](docs/ComputeProviderApi.md#setgroupstack) | **Post** /ComputeProvider.setGroupStack | 
*ComputeProviderApi* | [**Update**](docs/ComputeProviderApi.md#update) | **Post** /ComputeProvider.update | 
*ComputeProviderApi* | [**UpdateTeamCounters**](docs/ComputeProviderApi.md#updateteamcounters) | **Post** /ComputeProvider.updateTeamCounters | 
*DataDogApi* | [**SendEvent**](docs/DataDogApi.md#sendevent) | **Post** /DataDog.sendEvent | 
*DataDogApi* | [**SendMetrics**](docs/DataDogApi.md#sendmetrics) | **Post** /DataDog.sendMetrics | 
*GitProviderApi* | [**CreateImportedStackTemplate**](docs/GitProviderApi.md#createimportedstacktemplate) | **Post** /GitProvider.createImportedStackTemplate | 
*GitProviderApi* | [**FetchConfig**](docs/GitProviderApi.md#fetchconfig) | **Post** /GitProvider.fetchConfig | 
*GitProviderApi* | [**ImportStackTemplateData**](docs/GitProviderApi.md#importstacktemplatedata) | **Post** /GitProvider.importStackTemplateData | 
*GithubApi* | [**Api**](docs/GithubApi.md#api) | **Post** /Github.api | 
*JAccountApi* | [**AcceptInvitation**](docs/JAccountApi.md#acceptinvitation) | **Post** /JAccount.acceptInvitation/{id} | 
*JAccountApi* | [**BlockUser**](docs/JAccountApi.md#blockuser) | **Post** /JAccount.blockUser/{id} | 
*JAccountApi* | [**ByRelevance**](docs/JAccountApi.md#byrelevance) | **Post** /JAccount.byRelevance | 
*JAccountApi* | [**CancelRequest**](docs/JAccountApi.md#cancelrequest) | **Post** /JAccount.cancelRequest/{id} | 
*JAccountApi* | [**CheckGroupMembership**](docs/JAccountApi.md#checkgroupmembership) | **Post** /JAccount.checkGroupMembership/{id} | 
*JAccountApi* | [**Count**](docs/JAccountApi.md#count) | **Post** /JAccount.count | 
*JAccountApi* | [**Destroy**](docs/JAccountApi.md#destroy) | **Post** /JAccount.destroy/{id} | 
*JAccountApi* | [**ExpireSubscription**](docs/JAccountApi.md#expiresubscription) | **Post** /JAccount.expireSubscription/{id} | 
*JAccountApi* | [**FetchAppStorage**](docs/JAccountApi.md#fetchappstorage) | **Post** /JAccount.fetchAppStorage/{id} | 
*JAccountApi* | [**FetchBlockedUsers**](docs/JAccountApi.md#fetchblockedusers) | **Post** /JAccount.fetchBlockedUsers | 
*JAccountApi* | [**FetchEmail**](docs/JAccountApi.md#fetchemail) | **Post** /JAccount.fetchEmail/{id} | 
*JAccountApi* | [**FetchEmailAndStatus**](docs/JAccountApi.md#fetchemailandstatus) | **Post** /JAccount.fetchEmailAndStatus/{id} | 
*JAccountApi* | [**FetchEmailFrequency**](docs/JAccountApi.md#fetchemailfrequency) | **Post** /JAccount.fetchEmailFrequency/{id} | 
*JAccountApi* | [**FetchEmailsByUsername**](docs/JAccountApi.md#fetchemailsbyusername) | **Post** /JAccount.fetchEmailsByUsername | 
*JAccountApi* | [**FetchFromUser**](docs/JAccountApi.md#fetchfromuser) | **Post** /JAccount.fetchFromUser/{id} | 
*JAccountApi* | [**FetchGroups**](docs/JAccountApi.md#fetchgroups) | **Post** /JAccount.fetchGroups/{id} | 
*JAccountApi* | [**FetchKites**](docs/JAccountApi.md#fetchkites) | **Post** /JAccount.fetchKites/{id} | 
*JAccountApi* | [**FetchMyPermissions**](docs/JAccountApi.md#fetchmypermissions) | **Post** /JAccount.fetchMyPermissions/{id} | 
*JAccountApi* | [**FetchMyPermissionsAndRoles**](docs/JAccountApi.md#fetchmypermissionsandroles) | **Post** /JAccount.fetchMyPermissionsAndRoles/{id} | 
*JAccountApi* | [**FetchMySessions**](docs/JAccountApi.md#fetchmysessions) | **Post** /JAccount.fetchMySessions/{id} | 
*JAccountApi* | [**FetchOAuthInfo**](docs/JAccountApi.md#fetchoauthinfo) | **Post** /JAccount.fetchOAuthInfo/{id} | 
*JAccountApi* | [**FetchOtaToken**](docs/JAccountApi.md#fetchotatoken) | **Post** /JAccount.fetchOtaToken/{id} | 
*JAccountApi* | [**FetchPaymentMethods**](docs/JAccountApi.md#fetchpaymentmethods) | **Post** /JAccount.fetchPaymentMethods/{id} | 
*JAccountApi* | [**FetchRelativeGroups**](docs/JAccountApi.md#fetchrelativegroups) | **Post** /JAccount.fetchRelativeGroups/{id} | 
*JAccountApi* | [**FetchRole**](docs/JAccountApi.md#fetchrole) | **Post** /JAccount.fetchRole/{id} | 
*JAccountApi* | [**Generate2FactorAuthKey**](docs/JAccountApi.md#generate2factorauthkey) | **Post** /JAccount.generate2FactorAuthKey/{id} | 
*JAccountApi* | [**IgnoreInvitation**](docs/JAccountApi.md#ignoreinvitation) | **Post** /JAccount.ignoreInvitation/{id} | 
*JAccountApi* | [**IsEmailVerified**](docs/JAccountApi.md#isemailverified) | **Post** /JAccount.isEmailVerified/{id} | 
*JAccountApi* | [**IsFollowing**](docs/JAccountApi.md#isfollowing) | **Post** /JAccount.isFollowing/{id} | 
*JAccountApi* | [**MarkUserAsExempt**](docs/JAccountApi.md#markuserasexempt) | **Post** /JAccount.markUserAsExempt/{id} | 
*JAccountApi* | [**Modify**](docs/JAccountApi.md#modify) | **Post** /JAccount.modify/{id} | 
*JAccountApi* | [**One**](docs/JAccountApi.md#one) | **Post** /JAccount.one | 
*JAccountApi* | [**PushNotification**](docs/JAccountApi.md#pushnotification) | **Post** /JAccount.pushNotification/{id} | 
*JAccountApi* | [**SetEmailPreferences**](docs/JAccountApi.md#setemailpreferences) | **Post** /JAccount.setEmailPreferences/{id} | 
*JAccountApi* | [**Setup2FactorAuth**](docs/JAccountApi.md#setup2factorauth) | **Post** /JAccount.setup2FactorAuth/{id} | 
*JAccountApi* | [**Some**](docs/JAccountApi.md#some) | **Post** /JAccount.some | 
*JAccountApi* | [**SomeWithRelationship**](docs/JAccountApi.md#somewithrelationship) | **Post** /JAccount.someWithRelationship | 
*JAccountApi* | [**UnblockUser**](docs/JAccountApi.md#unblockuser) | **Post** /JAccount.unblockUser/{id} | 
*JAccountApi* | [**UnlinkOauth**](docs/JAccountApi.md#unlinkoauth) | **Post** /JAccount.unlinkOauth/{id} | 
*JAccountApi* | [**UpdateFlags**](docs/JAccountApi.md#updateflags) | **Post** /JAccount.updateFlags/{id} | 
*JAccountApi* | [**VerifyEmailByUsername**](docs/JAccountApi.md#verifyemailbyusername) | **Post** /JAccount.verifyEmailByUsername | 
*JApiTokenApi* | [**Create**](docs/JApiTokenApi.md#create) | **Post** /JApiToken.create | 
*JApiTokenApi* | [**Remove**](docs/JApiTokenApi.md#remove) | **Post** /JApiToken.remove/{id} | 
*JCombinedAppStorageApi* | [**Upsert**](docs/JCombinedAppStorageApi.md#upsert) | **Post** /JCombinedAppStorage.upsert/{id} | 
*JComputeStackApi* | [**CheckRevision**](docs/JComputeStackApi.md#checkrevision) | **Post** /JComputeStack.checkRevision/{id} | 
*JComputeStackApi* | [**Create**](docs/JComputeStackApi.md#create) | **Post** /JComputeStack.create | 
*JComputeStackApi* | [**CreateAdminMessage**](docs/JComputeStackApi.md#createadminmessage) | **Post** /JComputeStack.createAdminMessage/{id} | 
*JComputeStackApi* | [**Delete**](docs/JComputeStackApi.md#delete) | **Post** /JComputeStack.delete/{id} | 
*JComputeStackApi* | [**DeleteAdminMessage**](docs/JComputeStackApi.md#deleteadminmessage) | **Post** /JComputeStack.deleteAdminMessage/{id} | 
*JComputeStackApi* | [**Destroy**](docs/JComputeStackApi.md#destroy) | **Post** /JComputeStack.destroy/{id} | 
*JComputeStackApi* | [**Maintenance**](docs/JComputeStackApi.md#maintenance) | **Post** /JComputeStack.maintenance/{id} | 
*JComputeStackApi* | [**Modify**](docs/JComputeStackApi.md#modify) | **Post** /JComputeStack.modify/{id} | 
*JComputeStackApi* | [**One**](docs/JComputeStackApi.md#one) | **Post** /JComputeStack.one | 
*JComputeStackApi* | [**Some**](docs/JComputeStackApi.md#some) | **Post** /JComputeStack.some | 
*JCredentialApi* | [**Bootstrap**](docs/JCredentialApi.md#bootstrap) | **Post** /JCredential.bootstrap/{id} | 
*JCredentialApi* | [**Clone**](docs/JCredentialApi.md#clone) | **Post** /JCredential.clone/{id} | 
*JCredentialApi* | [**Create**](docs/JCredentialApi.md#create) | **Post** /JCredential.create | 
*JCredentialApi* | [**Delete**](docs/JCredentialApi.md#delete) | **Post** /JCredential.delete/{id} | 
*JCredentialApi* | [**FetchData**](docs/JCredentialApi.md#fetchdata) | **Post** /JCredential.fetchData/{id} | 
*JCredentialApi* | [**FetchUsers**](docs/JCredentialApi.md#fetchusers) | **Post** /JCredential.fetchUsers/{id} | 
*JCredentialApi* | [**IsBootstrapped**](docs/JCredentialApi.md#isbootstrapped) | **Post** /JCredential.isBootstrapped/{id} | 
*JCredentialApi* | [**One**](docs/JCredentialApi.md#one) | **Post** /JCredential.one | 
*JCredentialApi* | [**ShareWith**](docs/JCredentialApi.md#sharewith) | **Post** /JCredential.shareWith/{id} | 
*JCredentialApi* | [**Some**](docs/JCredentialApi.md#some) | **Post** /JCredential.some | 
*JCredentialApi* | [**Update**](docs/JCredentialApi.md#update) | **Post** /JCredential.update/{id} | 
*JCustomPartialsApi* | [**Create**](docs/JCustomPartialsApi.md#create) | **Post** /JCustomPartials.create | 
*JCustomPartialsApi* | [**Remove**](docs/JCustomPartialsApi.md#remove) | **Post** /JCustomPartials.remove/{id} | 
*JCustomPartialsApi* | [**Some**](docs/JCustomPartialsApi.md#some) | **Post** /JCustomPartials.some | 
*JCustomPartialsApi* | [**Update**](docs/JCustomPartialsApi.md#update) | **Post** /JCustomPartials.update/{id} | 
*JDomainAliasApi* | [**One**](docs/JDomainAliasApi.md#one) | **Post** /JDomainAlias.one | 
*JDomainAliasApi* | [**Some**](docs/JDomainAliasApi.md#some) | **Post** /JDomainAlias.some | 
*JGroupApi* | [**AddSubscription**](docs/JGroupApi.md#addsubscription) | **Post** /JGroup.addSubscription/{id} | 
*JGroupApi* | [**ByRelevance**](docs/JGroupApi.md#byrelevance) | **Post** /JGroup.byRelevance | 
*JGroupApi* | [**CanEditGroup**](docs/JGroupApi.md#caneditgroup) | **Post** /JGroup.canEditGroup/{id} | 
*JGroupApi* | [**ChangeMemberRoles**](docs/JGroupApi.md#changememberroles) | **Post** /JGroup.changeMemberRoles/{id} | 
*JGroupApi* | [**Count**](docs/JGroupApi.md#count) | **Post** /JGroup.count | 
*JGroupApi* | [**Create**](docs/JGroupApi.md#create) | **Post** /JGroup.create | 
*JGroupApi* | [**Destroy**](docs/JGroupApi.md#destroy) | **Post** /JGroup.destroy/{id} | 
*JGroupApi* | [**Each**](docs/JGroupApi.md#each) | **Post** /JGroup.each | 
*JGroupApi* | [**FetchAdmins**](docs/JGroupApi.md#fetchadmins) | **Post** /JGroup.fetchAdmins/{id} | 
*JGroupApi* | [**FetchAdminsWithEmail**](docs/JGroupApi.md#fetchadminswithemail) | **Post** /JGroup.fetchAdminsWithEmail/{id} | 
*JGroupApi* | [**FetchApiTokens**](docs/JGroupApi.md#fetchapitokens) | **Post** /JGroup.fetchApiTokens/{id} | 
*JGroupApi* | [**FetchBlockedAccounts**](docs/JGroupApi.md#fetchblockedaccounts) | **Post** /JGroup.fetchBlockedAccounts/{id} | 
*JGroupApi* | [**FetchBlockedAccountsWithEmail**](docs/JGroupApi.md#fetchblockedaccountswithemail) | **Post** /JGroup.fetchBlockedAccountsWithEmail/{id} | 
*JGroupApi* | [**FetchDataAt**](docs/JGroupApi.md#fetchdataat) | **Post** /JGroup.fetchDataAt/{id} | 
*JGroupApi* | [**FetchMembers**](docs/JGroupApi.md#fetchmembers) | **Post** /JGroup.fetchMembers/{id} | 
*JGroupApi* | [**FetchMembersWithEmail**](docs/JGroupApi.md#fetchmemberswithemail) | **Post** /JGroup.fetchMembersWithEmail/{id} | 
*JGroupApi* | [**FetchModerators**](docs/JGroupApi.md#fetchmoderators) | **Post** /JGroup.fetchModerators/{id} | 
*JGroupApi* | [**FetchModeratorsWithEmail**](docs/JGroupApi.md#fetchmoderatorswithemail) | **Post** /JGroup.fetchModeratorsWithEmail/{id} | 
*JGroupApi* | [**FetchMyMemberships**](docs/JGroupApi.md#fetchmymemberships) | **Post** /JGroup.fetchMyMemberships | 
*JGroupApi* | [**FetchMyRoles**](docs/JGroupApi.md#fetchmyroles) | **Post** /JGroup.fetchMyRoles/{id} | 
*JGroupApi* | [**FetchPermissionSetOrDefault**](docs/JGroupApi.md#fetchpermissionsetordefault) | **Post** /JGroup.fetchPermissionSetOrDefault/{id} | 
*JGroupApi* | [**FetchPermissions**](docs/JGroupApi.md#fetchpermissions) | **Post** /JGroup.fetchPermissions/{id} | 
*JGroupApi* | [**FetchResources**](docs/JGroupApi.md#fetchresources) | **Post** /JGroup.fetchResources/{id} | 
*JGroupApi* | [**FetchRoles**](docs/JGroupApi.md#fetchroles) | **Post** /JGroup.fetchRoles/{id} | 
*JGroupApi* | [**FetchSubscription**](docs/JGroupApi.md#fetchsubscription) | **Post** /JGroup.fetchSubscription/{id} | 
*JGroupApi* | [**FetchUserRoles**](docs/JGroupApi.md#fetchuserroles) | **Post** /JGroup.fetchUserRoles/{id} | 
*JGroupApi* | [**FetchUserStatus**](docs/JGroupApi.md#fetchuserstatus) | **Post** /JGroup.fetchUserStatus/{id} | 
*JGroupApi* | [**IsMember**](docs/JGroupApi.md#ismember) | **Post** /JGroup.isMember/{id} | 
*JGroupApi* | [**Join**](docs/JGroupApi.md#join) | **Post** /JGroup.join/{id} | 
*JGroupApi* | [**JoinUser**](docs/JGroupApi.md#joinuser) | **Post** /JGroup.joinUser | 
*JGroupApi* | [**KickMember**](docs/JGroupApi.md#kickmember) | **Post** /JGroup.kickMember/{id} | 
*JGroupApi* | [**Leave**](docs/JGroupApi.md#leave) | **Post** /JGroup.leave/{id} | 
*JGroupApi* | [**Modify**](docs/JGroupApi.md#modify) | **Post** /JGroup.modify/{id} | 
*JGroupApi* | [**ModifyData**](docs/JGroupApi.md#modifydata) | **Post** /JGroup.modifyData/{id} | 
*JGroupApi* | [**One**](docs/JGroupApi.md#one) | **Post** /JGroup.one | 
*JGroupApi* | [**SearchMembers**](docs/JGroupApi.md#searchmembers) | **Post** /JGroup.searchMembers/{id} | 
*JGroupApi* | [**SendNotification**](docs/JGroupApi.md#sendnotification) | **Post** /JGroup.sendNotification/{id} | 
*JGroupApi* | [**SetLimit**](docs/JGroupApi.md#setlimit) | **Post** /JGroup.setLimit/{id} | 
*JGroupApi* | [**SetOAuth**](docs/JGroupApi.md#setoauth) | **Post** /JGroup.setOAuth/{id} | 
*JGroupApi* | [**SomeWithRelationship**](docs/JGroupApi.md#somewithrelationship) | **Post** /JGroup.someWithRelationship | 
*JGroupApi* | [**SuggestUniqueSlug**](docs/JGroupApi.md#suggestuniqueslug) | **Post** /JGroup.suggestUniqueSlug | 
*JGroupApi* | [**ToggleFeature**](docs/JGroupApi.md#togglefeature) | **Post** /JGroup.toggleFeature/{id} | 
*JGroupApi* | [**TransferOwnership**](docs/JGroupApi.md#transferownership) | **Post** /JGroup.transferOwnership/{id} | 
*JGroupApi* | [**UnblockMember**](docs/JGroupApi.md#unblockmember) | **Post** /JGroup.unblockMember/{id} | 
*JGroupApi* | [**UpdatePermissions**](docs/JGroupApi.md#updatepermissions) | **Post** /JGroup.updatePermissions/{id} | 
*JGroupDataApi* | [**FetchByKey**](docs/JGroupDataApi.md#fetchbykey) | **Post** /JGroupData.fetchByKey | 
*JInvitationApi* | [**Accept**](docs/JInvitationApi.md#accept) | **Post** /JInvitation.accept/{id} | 
*JInvitationApi* | [**ByCode**](docs/JInvitationApi.md#bycode) | **Post** /JInvitation.byCode | 
*JInvitationApi* | [**Create**](docs/JInvitationApi.md#create) | **Post** /JInvitation.create | 
*JInvitationApi* | [**Remove**](docs/JInvitationApi.md#remove) | **Post** /JInvitation.remove/{id} | 
*JInvitationApi* | [**RevokeInvitation**](docs/JInvitationApi.md#revokeinvitation) | **Post** /JInvitation.revokeInvitation | 
*JInvitationApi* | [**Search**](docs/JInvitationApi.md#search) | **Post** /JInvitation.search | 
*JInvitationApi* | [**SendInvitationByCode**](docs/JInvitationApi.md#sendinvitationbycode) | **Post** /JInvitation.sendInvitationByCode | 
*JInvitationApi* | [**Some**](docs/JInvitationApi.md#some) | **Post** /JInvitation.some | 
*JMachineApi* | [**Approve**](docs/JMachineApi.md#approve) | **Post** /JMachine.approve/{id} | 
*JMachineApi* | [**Deny**](docs/JMachineApi.md#deny) | **Post** /JMachine.deny/{id} | 
*JMachineApi* | [**One**](docs/JMachineApi.md#one) | **Post** /JMachine.one | 
*JMachineApi* | [**ReviveUsers**](docs/JMachineApi.md#reviveusers) | **Post** /JMachine.reviveUsers/{id} | 
*JMachineApi* | [**SetChannelId**](docs/JMachineApi.md#setchannelid) | **Post** /JMachine.setChannelId/{id} | 
*JMachineApi* | [**SetLabel**](docs/JMachineApi.md#setlabel) | **Post** /JMachine.setLabel/{id} | 
*JMachineApi* | [**SetProvisioner**](docs/JMachineApi.md#setprovisioner) | **Post** /JMachine.setProvisioner/{id} | 
*JMachineApi* | [**Share**](docs/JMachineApi.md#share) | **Post** /JMachine.share/{id} | 
*JMachineApi* | [**ShareWith**](docs/JMachineApi.md#sharewith) | **Post** /JMachine.shareWith/{id} | 
*JMachineApi* | [**Some**](docs/JMachineApi.md#some) | **Post** /JMachine.some | 
*JMachineApi* | [**Unshare**](docs/JMachineApi.md#unshare) | **Post** /JMachine.unshare/{id} | 
*JNameApi* | [**ClaimNames**](docs/JNameApi.md#claimnames) | **Post** /JName.claimNames | 
*JNameApi* | [**One**](docs/JNameApi.md#one) | **Post** /JName.one | 
*JPasswordRecoveryApi* | [**FetchRegistrationDetails**](docs/JPasswordRecoveryApi.md#fetchregistrationdetails) | **Post** /JPasswordRecovery.fetchRegistrationDetails | 
*JPasswordRecoveryApi* | [**RecoverPassword**](docs/JPasswordRecoveryApi.md#recoverpassword) | **Post** /JPasswordRecovery.recoverPassword | 
*JPasswordRecoveryApi* | [**ResendVerification**](docs/JPasswordRecoveryApi.md#resendverification) | **Post** /JPasswordRecovery.resendVerification | 
*JPasswordRecoveryApi* | [**ResetPassword**](docs/JPasswordRecoveryApi.md#resetpassword) | **Post** /JPasswordRecovery.resetPassword | 
*JPasswordRecoveryApi* | [**Validate**](docs/JPasswordRecoveryApi.md#validate) | **Post** /JPasswordRecovery.validate | 
*JProposedDomainApi* | [**ActivateDomain**](docs/JProposedDomainApi.md#activatedomain) | **Post** /JProposedDomain.activateDomain/{id} | 
*JProposedDomainApi* | [**BindMachine**](docs/JProposedDomainApi.md#bindmachine) | **Post** /JProposedDomain.bindMachine/{id} | 
*JProposedDomainApi* | [**CreateDomain**](docs/JProposedDomainApi.md#createdomain) | **Post** /JProposedDomain.createDomain | 
*JProposedDomainApi* | [**DeactivateDomain**](docs/JProposedDomainApi.md#deactivatedomain) | **Post** /JProposedDomain.deactivateDomain/{id} | 
*JProposedDomainApi* | [**FetchDomains**](docs/JProposedDomainApi.md#fetchdomains) | **Post** /JProposedDomain.fetchDomains | 
*JProposedDomainApi* | [**One**](docs/JProposedDomainApi.md#one) | **Post** /JProposedDomain.one | 
*JProposedDomainApi* | [**Remove**](docs/JProposedDomainApi.md#remove) | **Post** /JProposedDomain.remove/{id} | 
*JProposedDomainApi* | [**UnbindMachine**](docs/JProposedDomainApi.md#unbindmachine) | **Post** /JProposedDomain.unbindMachine/{id} | 
*JProvisionerApi* | [**Create**](docs/JProvisionerApi.md#create) | **Post** /JProvisioner.create | 
*JProvisionerApi* | [**Delete**](docs/JProvisionerApi.md#delete) | **Post** /JProvisioner.delete/{id} | 
*JProvisionerApi* | [**One**](docs/JProvisionerApi.md#one) | **Post** /JProvisioner.one | 
*JProvisionerApi* | [**SetAccess**](docs/JProvisionerApi.md#setaccess) | **Post** /JProvisioner.setAccess/{id} | 
*JProvisionerApi* | [**Some**](docs/JProvisionerApi.md#some) | **Post** /JProvisioner.some | 
*JProvisionerApi* | [**Update**](docs/JProvisionerApi.md#update) | **Post** /JProvisioner.update/{id} | 
*JRewardApi* | [**AddCustomReward**](docs/JRewardApi.md#addcustomreward) | **Post** /JReward.addCustomReward | 
*JRewardApi* | [**FetchCustomData**](docs/JRewardApi.md#fetchcustomdata) | **Post** /JReward.fetchCustomData | 
*JRewardApi* | [**FetchEarnedAmount**](docs/JRewardApi.md#fetchearnedamount) | **Post** /JReward.fetchEarnedAmount | 
*JRewardApi* | [**Some**](docs/JRewardApi.md#some) | **Post** /JReward.some | 
*JRewardCampaignApi* | [**Create**](docs/JRewardCampaignApi.md#create) | **Post** /JRewardCampaign.create | 
*JRewardCampaignApi* | [**IsValid**](docs/JRewardCampaignApi.md#isvalid) | **Post** /JRewardCampaign.isValid | 
*JRewardCampaignApi* | [**One**](docs/JRewardCampaignApi.md#one) | **Post** /JRewardCampaign.one | 
*JRewardCampaignApi* | [**Remove**](docs/JRewardCampaignApi.md#remove) | **Post** /JRewardCampaign.remove/{id} | 
*JRewardCampaignApi* | [**Some**](docs/JRewardCampaignApi.md#some) | **Post** /JRewardCampaign.some | 
*JRewardCampaignApi* | [**Update**](docs/JRewardCampaignApi.md#update) | **Post** /JRewardCampaign.update/{id} | 
*JSessionApi* | [**ActiveSession**](docs/JSessionApi.md#activesession) | **Post** /JSession.activeSession | 
*JSessionApi* | [**Remove**](docs/JSessionApi.md#remove) | **Post** /JSession.remove/{id} | 
*JStackTemplateApi* | [**Build**](docs/JStackTemplateApi.md#build) | **Post** /JStackTemplate.build/{id} | 
*JStackTemplateApi* | [**Clone**](docs/JStackTemplateApi.md#clone) | **Post** /JStackTemplate.clone/{id} | 
*JStackTemplateApi* | [**Create**](docs/JStackTemplateApi.md#create) | **Post** /JStackTemplate.create | 
*JStackTemplateApi* | [**Delete**](docs/JStackTemplateApi.md#delete) | **Post** /JStackTemplate.delete/{id} | 
*JStackTemplateApi* | [**ForceStacksToReinit**](docs/JStackTemplateApi.md#forcestackstoreinit) | **Post** /JStackTemplate.forceStacksToReinit/{id} | 
*JStackTemplateApi* | [**GenerateStack**](docs/JStackTemplateApi.md#generatestack) | **Post** /JStackTemplate.generateStack/{id} | 
*JStackTemplateApi* | [**HasStacks**](docs/JStackTemplateApi.md#hasstacks) | **Post** /JStackTemplate.hasStacks/{id} | 
*JStackTemplateApi* | [**One**](docs/JStackTemplateApi.md#one) | **Post** /JStackTemplate.one | 
*JStackTemplateApi* | [**Samples**](docs/JStackTemplateApi.md#samples) | **Post** /JStackTemplate.samples | 
*JStackTemplateApi* | [**SetAccess**](docs/JStackTemplateApi.md#setaccess) | **Post** /JStackTemplate.setAccess/{id} | 
*JStackTemplateApi* | [**Some**](docs/JStackTemplateApi.md#some) | **Post** /JStackTemplate.some | 
*JStackTemplateApi* | [**Update**](docs/JStackTemplateApi.md#update) | **Post** /JStackTemplate.update/{id} | 
*JStackTemplateApi* | [**Verify**](docs/JStackTemplateApi.md#verify) | **Post** /JStackTemplate.verify/{id} | 
*JTeamInvitationApi* | [**ByCode**](docs/JTeamInvitationApi.md#bycode) | **Post** /JTeamInvitation.byCode | 
*JTeamInvitationApi* | [**Create**](docs/JTeamInvitationApi.md#create) | **Post** /JTeamInvitation.create | 
*JTeamInvitationApi* | [**Remove**](docs/JTeamInvitationApi.md#remove) | **Post** /JTeamInvitation.remove/{id} | 
*JTeamInvitationApi* | [**SendInvitationEmails**](docs/JTeamInvitationApi.md#sendinvitationemails) | **Post** /JTeamInvitation.sendInvitationEmails | 
*JUrlAliasApi* | [**Create**](docs/JUrlAliasApi.md#create) | **Post** /JUrlAlias.create | 
*JUrlAliasApi* | [**Resolve**](docs/JUrlAliasApi.md#resolve) | **Post** /JUrlAlias.resolve | 
*JUserApi* | [**AuthenticateWithOauth**](docs/JUserApi.md#authenticatewithoauth) | **Post** /JUser.authenticateWithOauth | 
*JUserApi* | [**ChangeEmail**](docs/JUserApi.md#changeemail) | **Post** /JUser.changeEmail | 
*JUserApi* | [**ChangePassword**](docs/JUserApi.md#changepassword) | **Post** /JUser.changePassword | 
*JUserApi* | [**Convert**](docs/JUserApi.md#convert) | **Post** /JUser.convert | 
*JUserApi* | [**EmailAvailable**](docs/JUserApi.md#emailavailable) | **Post** /JUser.emailAvailable | 
*JUserApi* | [**FetchUser**](docs/JUserApi.md#fetchuser) | **Post** /JUser.fetchUser | 
*JUserApi* | [**GetSSHKeys**](docs/JUserApi.md#getsshkeys) | **Post** /JUser.getSSHKeys | 
*JUserApi* | [**Login**](docs/JUserApi.md#login) | **Post** /JUser.login | 
*JUserApi* | [**Logout**](docs/JUserApi.md#logout) | **Post** /JUser.logout | 
*JUserApi* | [**SetSSHKeys**](docs/JUserApi.md#setsshkeys) | **Post** /JUser.setSSHKeys | 
*JUserApi* | [**Unregister**](docs/JUserApi.md#unregister) | **Post** /JUser.unregister | 
*JUserApi* | [**UsernameAvailable**](docs/JUserApi.md#usernameavailable) | **Post** /JUser.usernameAvailable | 
*JUserApi* | [**VerifyByPin**](docs/JUserApi.md#verifybypin) | **Post** /JUser.verifyByPin | 
*JUserApi* | [**VerifyPassword**](docs/JUserApi.md#verifypassword) | **Post** /JUser.verifyPassword | 
*JUserApi* | [**Whoami**](docs/JUserApi.md#whoami) | **Post** /JUser.whoami | 
*KloudApi* | [**AddAdmin**](docs/KloudApi.md#addadmin) | **Post** /Kloud.addAdmin | 
*KloudApi* | [**Bootstrap**](docs/KloudApi.md#bootstrap) | **Post** /Kloud.bootstrap | 
*KloudApi* | [**Build**](docs/KloudApi.md#build) | **Post** /Kloud.build | 
*KloudApi* | [**BuildStack**](docs/KloudApi.md#buildstack) | **Post** /Kloud.buildStack | 
*KloudApi* | [**CheckCredential**](docs/KloudApi.md#checkcredential) | **Post** /Kloud.checkCredential | 
*KloudApi* | [**CheckTemplate**](docs/KloudApi.md#checktemplate) | **Post** /Kloud.checkTemplate | 
*KloudApi* | [**Destroy**](docs/KloudApi.md#destroy) | **Post** /Kloud.destroy | 
*KloudApi* | [**DestroyStack**](docs/KloudApi.md#destroystack) | **Post** /Kloud.destroyStack | 
*KloudApi* | [**Event**](docs/KloudApi.md#event) | **Post** /Kloud.event | 
*KloudApi* | [**Info**](docs/KloudApi.md#info) | **Post** /Kloud.info | 
*KloudApi* | [**Migrate**](docs/KloudApi.md#migrate) | **Post** /Kloud.migrate | 
*KloudApi* | [**Ping**](docs/KloudApi.md#ping) | **Post** /Kloud.ping | 
*KloudApi* | [**RemoveAdmin**](docs/KloudApi.md#removeadmin) | **Post** /Kloud.removeAdmin | 
*KloudApi* | [**Restart**](docs/KloudApi.md#restart) | **Post** /Kloud.restart | 
*KloudApi* | [**Start**](docs/KloudApi.md#start) | **Post** /Kloud.start | 
*KloudApi* | [**Stop**](docs/KloudApi.md#stop) | **Post** /Kloud.stop | 
*OAuthApi* | [**GetUrl**](docs/OAuthApi.md#geturl) | **Post** /OAuth.getUrl | 
*S3Api* | [**GeneratePolicy**](docs/S3Api.md#generatepolicy) | **Post** /S3.generatePolicy | 
*SharedMachineApi* | [**Add**](docs/SharedMachineApi.md#add) | **Post** /SharedMachine.add | 
*SharedMachineApi* | [**Kick**](docs/SharedMachineApi.md#kick) | **Post** /SharedMachine.kick | 
*SidebarApi* | [**FetchEnvironment**](docs/SidebarApi.md#fetchenvironment) | **Post** /Sidebar.fetchEnvironment | 
*SocialChannelApi* | [**AcceptInvite**](docs/SocialChannelApi.md#acceptinvite) | **Post** /SocialChannel.acceptInvite | 
*SocialChannelApi* | [**AddParticipants**](docs/SocialChannelApi.md#addparticipants) | **Post** /SocialChannel.addParticipants | 
*SocialChannelApi* | [**ById**](docs/SocialChannelApi.md#byid) | **Post** /SocialChannel.byId | 
*SocialChannelApi* | [**ByName**](docs/SocialChannelApi.md#byname) | **Post** /SocialChannel.byName | 
*SocialChannelApi* | [**Create**](docs/SocialChannelApi.md#create) | **Post** /SocialChannel.create | 
*SocialChannelApi* | [**CreateChannelWithParticipants**](docs/SocialChannelApi.md#createchannelwithparticipants) | **Post** /SocialChannel.createChannelWithParticipants | 
*SocialChannelApi* | [**Delete**](docs/SocialChannelApi.md#delete) | **Post** /SocialChannel.delete | 
*SocialChannelApi* | [**FetchActivities**](docs/SocialChannelApi.md#fetchactivities) | **Post** /SocialChannel.fetchActivities | 
*SocialChannelApi* | [**FetchActivityCount**](docs/SocialChannelApi.md#fetchactivitycount) | **Post** /SocialChannel.fetchActivityCount | 
*SocialChannelApi* | [**FetchChannels**](docs/SocialChannelApi.md#fetchchannels) | **Post** /SocialChannel.fetchChannels | 
*SocialChannelApi* | [**FetchFollowedChannelCount**](docs/SocialChannelApi.md#fetchfollowedchannelcount) | **Post** /SocialChannel.fetchFollowedChannelCount | 
*SocialChannelApi* | [**FetchFollowedChannels**](docs/SocialChannelApi.md#fetchfollowedchannels) | **Post** /SocialChannel.fetchFollowedChannels | 
*SocialChannelApi* | [**FetchParticipants**](docs/SocialChannelApi.md#fetchparticipants) | **Post** /SocialChannel.fetchParticipants | 
*SocialChannelApi* | [**FetchPinnedMessages**](docs/SocialChannelApi.md#fetchpinnedmessages) | **Post** /SocialChannel.fetchPinnedMessages | 
*SocialChannelApi* | [**FetchPopularPosts**](docs/SocialChannelApi.md#fetchpopularposts) | **Post** /SocialChannel.fetchPopularPosts | 
*SocialChannelApi* | [**FetchPopularTopics**](docs/SocialChannelApi.md#fetchpopulartopics) | **Post** /SocialChannel.fetchPopularTopics | 
*SocialChannelApi* | [**FetchProfileFeed**](docs/SocialChannelApi.md#fetchprofilefeed) | **Post** /SocialChannel.fetchProfileFeed | 
*SocialChannelApi* | [**FetchProfileFeedCount**](docs/SocialChannelApi.md#fetchprofilefeedcount) | **Post** /SocialChannel.fetchProfileFeedCount | 
*SocialChannelApi* | [**GlancePinnedPost**](docs/SocialChannelApi.md#glancepinnedpost) | **Post** /SocialChannel.glancePinnedPost | 
*SocialChannelApi* | [**Leave**](docs/SocialChannelApi.md#leave) | **Post** /SocialChannel.leave | 
*SocialChannelApi* | [**ListParticipants**](docs/SocialChannelApi.md#listparticipants) | **Post** /SocialChannel.listParticipants | 
*SocialChannelApi* | [**PinMessage**](docs/SocialChannelApi.md#pinmessage) | **Post** /SocialChannel.pinMessage | 
*SocialChannelApi* | [**RejectInvite**](docs/SocialChannelApi.md#rejectinvite) | **Post** /SocialChannel.rejectInvite | 
*SocialChannelApi* | [**RemoveParticipants**](docs/SocialChannelApi.md#removeparticipants) | **Post** /SocialChannel.removeParticipants | 
*SocialChannelApi* | [**SearchTopics**](docs/SocialChannelApi.md#searchtopics) | **Post** /SocialChannel.searchTopics | 
*SocialChannelApi* | [**UnpinMessage**](docs/SocialChannelApi.md#unpinmessage) | **Post** /SocialChannel.unpinMessage | 
*SocialChannelApi* | [**Update**](docs/SocialChannelApi.md#update) | **Post** /SocialChannel.update | 
*SocialChannelApi* | [**UpdateLastSeenTime**](docs/SocialChannelApi.md#updatelastseentime) | **Post** /SocialChannel.updateLastSeenTime | 
*SocialMessageApi* | [**ById**](docs/SocialMessageApi.md#byid) | **Post** /SocialMessage.byId | 
*SocialMessageApi* | [**BySlug**](docs/SocialMessageApi.md#byslug) | **Post** /SocialMessage.bySlug | 
*SocialMessageApi* | [**Delete**](docs/SocialMessageApi.md#delete) | **Post** /SocialMessage.delete | 
*SocialMessageApi* | [**Edit**](docs/SocialMessageApi.md#edit) | **Post** /SocialMessage.edit | 
*SocialMessageApi* | [**Fetch**](docs/SocialMessageApi.md#fetch) | **Post** /SocialMessage.fetch | 
*SocialMessageApi* | [**FetchDataFromEmbedly**](docs/SocialMessageApi.md#fetchdatafromembedly) | **Post** /SocialMessage.fetchDataFromEmbedly | 
*SocialMessageApi* | [**FetchPrivateMessageCount**](docs/SocialMessageApi.md#fetchprivatemessagecount) | **Post** /SocialMessage.fetchPrivateMessageCount | 
*SocialMessageApi* | [**FetchPrivateMessages**](docs/SocialMessageApi.md#fetchprivatemessages) | **Post** /SocialMessage.fetchPrivateMessages | 
*SocialMessageApi* | [**InitPrivateMessage**](docs/SocialMessageApi.md#initprivatemessage) | **Post** /SocialMessage.initPrivateMessage | 
*SocialMessageApi* | [**Like**](docs/SocialMessageApi.md#like) | **Post** /SocialMessage.like | 
*SocialMessageApi* | [**ListLikers**](docs/SocialMessageApi.md#listlikers) | **Post** /SocialMessage.listLikers | 
*SocialMessageApi* | [**ListReplies**](docs/SocialMessageApi.md#listreplies) | **Post** /SocialMessage.listReplies | 
*SocialMessageApi* | [**PaymentSubscribe**](docs/SocialMessageApi.md#paymentsubscribe) | **Post** /SocialMessage.paymentSubscribe | 
*SocialMessageApi* | [**Post**](docs/SocialMessageApi.md#post) | **Post** /SocialMessage.post | 
*SocialMessageApi* | [**Reply**](docs/SocialMessageApi.md#reply) | **Post** /SocialMessage.reply | 
*SocialMessageApi* | [**Search**](docs/SocialMessageApi.md#search) | **Post** /SocialMessage.search | 
*SocialMessageApi* | [**SendPrivateMessage**](docs/SocialMessageApi.md#sendprivatemessage) | **Post** /SocialMessage.sendPrivateMessage | 
*SocialMessageApi* | [**Unlike**](docs/SocialMessageApi.md#unlike) | **Post** /SocialMessage.unlike | 
*SocialNotificationApi* | [**Fetch**](docs/SocialNotificationApi.md#fetch) | **Post** /SocialNotification.fetch | 
*SocialNotificationApi* | [**Glance**](docs/SocialNotificationApi.md#glance) | **Post** /SocialNotification.glance | 
*SystemApi* | [**VersionGet**](docs/SystemApi.md#versionget) | **Get** ../-/version | 
*TrackerApi* | [**Track**](docs/TrackerApi.md#track) | **Post** /Tracker.track | 


## Documentation For Models

 - [Body](docs/Body.md)
 - [Body1](docs/Body1.md)
 - [Body2](docs/Body2.md)
 - [Body3](docs/Body3.md)
 - [Body4](docs/Body4.md)
 - [ComputeProviderCreateMeta](docs/ComputeProviderCreateMeta.md)
 - [DefaultResponse](docs/DefaultResponse.md)
 - [DefaultSelector](docs/DefaultSelector.md)
 - [InlineResponse200](docs/InlineResponse200.md)
 - [InlineResponse200Data](docs/InlineResponse200Data.md)
 - [InlineResponse200DataDefaults](docs/InlineResponse200DataDefaults.md)
 - [JAccount](docs/JAccount.md)
 - [JAccountProfile](docs/JAccountProfile.md)
 - [JApiToken](docs/JApiToken.md)
 - [JCombinedAppStorage](docs/JCombinedAppStorage.md)
 - [JComputeStack](docs/JComputeStack.md)
 - [JCounter](docs/JCounter.md)
 - [JCredential](docs/JCredential.md)
 - [JCredentialData](docs/JCredentialData.md)
 - [JCustomPartials](docs/JCustomPartials.md)
 - [JDomainAlias](docs/JDomainAlias.md)
 - [JEarnedReward](docs/JEarnedReward.md)
 - [JForeignAuth](docs/JForeignAuth.md)
 - [JGroup](docs/JGroup.md)
 - [JGroupCustomize](docs/JGroupCustomize.md)
 - [JGroupData](docs/JGroupData.md)
 - [JGroupLimit](docs/JGroupLimit.md)
 - [JGroupLimitRestrictions](docs/JGroupLimitRestrictions.md)
 - [JGroupRole](docs/JGroupRole.md)
 - [JInvitation](docs/JInvitation.md)
 - [JLog](docs/JLog.md)
 - [JMachine](docs/JMachine.md)
 - [JMachineAssignee](docs/JMachineAssignee.md)
 - [JMachineGeneratedFrom](docs/JMachineGeneratedFrom.md)
 - [JMachineStatus](docs/JMachineStatus.md)
 - [JName](docs/JName.md)
 - [JPasswordRecovery](docs/JPasswordRecovery.md)
 - [JPermissionSet](docs/JPermissionSet.md)
 - [JProposedDomain](docs/JProposedDomain.md)
 - [JProposedDomainProxy](docs/JProposedDomainProxy.md)
 - [JProvisioner](docs/JProvisioner.md)
 - [JReward](docs/JReward.md)
 - [JRewardCampaign](docs/JRewardCampaign.md)
 - [JSession](docs/JSession.md)
 - [JSessionForeignAuth](docs/JSessionForeignAuth.md)
 - [JStackTemplate](docs/JStackTemplate.md)
 - [JStackTemplateTemplate](docs/JStackTemplateTemplate.md)
 - [JTeamInvitation](docs/JTeamInvitation.md)
 - [JUrlAlias](docs/JUrlAlias.md)
 - [JUser](docs/JUser.md)
 - [JUserRegisteredFrom](docs/JUserRegisteredFrom.md)
 - [JVerificationToken](docs/JVerificationToken.md)
 - [ModelError](docs/ModelError.md)
 - [UnauthorizedRequest](docs/UnauthorizedRequest.md)


## Documentation For Authorization


## Bearer

- **Type**: API key 
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Author



