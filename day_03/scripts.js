// https://adventofcode.com/2022/day/3

// To keep the string as close to the original as possible, created it as template literals.
const input = `NGvdqJmJvpNbGRMGQgRsfgfn
WlHTHShlLwSWjFRsncfbcwsgQc
BHtSBHWHSCWLZHlhjTHLLdbNNqNpzpDzNvDvtPmmPp
JJSShnTpDSJJlllfwBNVbMQWwhQhgQtt
cTzrvrHdLwwzttQNWB
qrFqTFvqZvrmsplsjlnDflnZ
mhhhVHvNNddHMwBqQwlWZZtv
fbjzjJllCtWjjrZtjq
CbgcgpPRDJfzVHFFnSnsSDlm
ZqBPqBQnPLmqZsFqhsvFsLZQMfSSMbbWddWbjbJSrgWgJf
NRHnlllcDwwCNClNtttHbNJrSJNfbdWMdfbWgdrJ
cHGlzTptHtCpncHnCpHpRGzDmvVhqLmvLPmPvLqPmzsqqmPB
rCzVtMMbMvCmmvGlclFQFfLpJFJfJpcLHPJL
nDGGwqGqnRTfpHLpRFpLFf
ZNdNTDsWgNZsZBndnGrzrlMrjgrmjVGjvC
MgFZHFTgqFFDZZDTdVdHrzQvLzCGwpCPrGLqQpzz
JsnmbjhmffJbRNJppzPPzwzzrwdv
lfblfthBRbBRjnjhBtBlZgdVcFSTVFDtSSWgMcdM
hPVhVhWPCMhlDTTWdrPlTcLjfbZbFNjZBbFNBbdBFbsB
MHSwMJpHnqJHwtqHGqGGmvqZsZFjBmsBNRBFfLbsFsZfsZ
pqtMHHQpvqnwMpgJMCChTQhVVlclPWrCCD
zRBBhZFwWZlBQpMZNNNJsfDpLsNsJppN
SvggPbjvVSvvtgGVPbbnSMcCLtMrDddssJdsLdfdCD
mTSmMgHjgmgGgqzTwZwBlBFzwB
WLzWZHWSZPFRVSPSPM
hmrvmGvfTCmhBGBqTfnmJFfdbQcwdMhMwRdbQMVQQcMhsQ
JGJJnrnnCmqBTJTrNBqBLDzHFLFDNgjZlWtDNZHL
bwbbnWwpbTwFHwRzzzmH
ZccjZjddjPVhJmrBQHHFQRHcWF
NVhWldsMjZZZLSnvSTGTgvMb
ccJbHpzccZJsNpJCmHHlBTgHnlTPmF
qvQGQfDVhhDfvVfVDSdDCbFnjmllPQjlbCmnFgjg
hSbtWRGvhdfDVdVRfvRNpsWsZLNMZzcswLZWMM
vlTdlBTMdtjcvLGmtb
SSgfSsJngCSSwNFgspHFNFFpjlbGjQbbQGLthLnWtmWWhjbm
SJsfqqgfNHwJfHgCpwzBZVMDBPMMRPTlqzBr
VHsVhtbRHRpVHBfBCJdNfGjggGJdqLGq
wSzSrrSMPDSDwzPjdqJjNwGdsLqGjj
MnrnQTnWZWWzWQDMvZhtHtshhHlHBcBBsvVt
DZbPqdTqGTZtRrzjFmZZtF
gjQwVvBVWgfghvgmcrBNFccHFRmHtF
QlgvWlfgVsQfdlqqjqPDbPlM
VcfLwwcMlpnfVDrDtrtvbjMtTM
mmgBgzSQmQdgHBFSLvvbDTJmTDvTJJDr
RWNBHHzWNSdSdzFgSLNWWfZGwfpcwWVnnfpCCWlV
GDZLtsJMFGLDPnbblJlNJNcJ
BBRgSwqwqRZhTVSqjVgRwCdQcmcPmdnPPnPnmjlrbmQj
RCqfVvhfCCShBCRfVCwztDGZMHpLWHftFptspF
dlZqlBfBSShZhvprbCJTDrJCJjJNDh
WGRwQwHsMVVGMsVGcRVtQWRVpNCjWNDbzbDNJnbnrCbprrNW
HgHRRVGGwLgLBPvgSp
QPlZSlZzVLLDwhDfBppf
bghGGhmqrspDcfbsbs
tTrdTgFddtnvmdgvtCTdGTTqFZjjQQPVZPSZSjlZhVVQjlRS
BgBFHnwwSTNHqSPN
GJmCbDdlbZGCLhsstNLsMZZZ
JGJpCCDvmlVDVldGJBVfBBRwRjnVWWBRfN
WTFWQgGQtTMqMCJJzDVDgCchhj
mNPBmPlPHrWmwmNLHmShcnJjhrnzJzdcdzdjJJ
SHssNRSmvPRmlsmLwwsmwLvpQptpQWMQbGFQFtfpFfZQ
DgpNLVjgNjjmzGPVRmfrZrctdTcrzfwzdfMc
bnbNqnbFNwMcMtMfwF
svCQHHhShnbCvHChsvHlLDVhJJLRJGNpgPJPjLLD
TmBzgTVVBgfbmTVfPmFRJcHctnHDLDDLJqqBGB
hwvlNCCvSphMwSvrlwCCrrDcfRlJDLRtGqcqHnqRqLGR
pMSSMMNCSwMjjWhwrrjShQNFmsPmPFWbbZzVfZsPPPZVmZ
sTTrWGCMggpVWhSBltWp
HNJdwLDzNcJnNLwJJPqpllqhBpqStjfwlfpj
PJHzDzFLtLccdLggvrGGmgvFssgG
FwCssBFRBlvbBVdQ
jPzjDpqNGqJzZGSNHppPclFvvdfVflblbJlmFfll
SDzDpSNqjZjjZFSrHrFZTTCMLsnTLnnnMhrLtLnn
ScWQvvSDddGrWVrG
fwhPFLpwTfTjrzwHdmmmGdgdsPsqdRmV
CHlFpTpwwCjwFjwjCBnrvQBZZcBSnZtvZl
vJvdWVNslWtJcDtDHrDf
GCnnMZpZnSZpvDqFtftfjfZqrh
TbGMSRCRvWbPNsWB
NNNdsRddGNdZZTCBtqbtBgtC
zhFHppHhzcgmzQhccjgmjhQTnvvBFtBnCBbbnTvtCCtntt
HpjmhfSjQwfzwHmcggfzjSLfVWPDsWMsMdWdDSMsGWPPllVN
WSvcSSwrGzFsznqPNNWqPqlllB
djVDdHdSPRqlntjN
LpZZgpLgLHTDHVpDSTsffvGwrcfffGwv
wGlbWGVvGlWlrvppbFMjQjsBjCsjmCzzQzNv
ZgfdJcfZhMNCgSBRCQRz
hcLDZPZdqZhJPhcTHJfPHVqlqtFWMrGGrpwVGVpWrV
dsngCgdssHDVsHdsFDvMDvmMmjTjDFTL
qZpSqptZZGWLTLSjlLHFzl
NZqqRpWqhQpNhqhpZRWBJQQssJbbCsdbHsCbgb
QdGBjjbHsBsBbBdGcwwTGrCRRrFcPPTC
ZDtvWfMDvWScSrpzPccCdr
hhZMgffDhZNvtDgHQsQQVQmBVVHNdV
LhQLrzVdVmqcjmTNzm
tHMZDJDZCDDtZMWwCJjcffqqfjRmqSRqcq
CpHpZZWWtWpWwBplZWmQbhVBVPhnPrhbLQPvvs
FFgFSmJmSgGpZzsmgGmbDlDzMQPDNPzRQRDjQQzV
CLwnwWBdrtthttTWBWdPnVvRVVVNMSVQPvVnnV
BTtdLthfhTrLdftCwqrddmGFcSfpGbsmFGHpmGFHHc
JFJnMZwQBqnJJBqZJqPqMFBlbmBHblWbrmlfbWgbvmWrgW
spCTjtVzsNDdsNdTsjVTtNzgHfmWWgHSSrgrbSbbhHbVHS
TfCdjjsjzLNsfTszcdqcQMnRMPPRnFRPQRFP
VvDgDqTDtTNWTWfNFWlW
pzPvdssRNQFQRNZF
CCpBpsrrccGvttgGqBDG
jmZrrjlCJqmCVFMPbFbBZPVp
dfLLfRMGTdHbssPLLPbFwL
QWWHHTRQdRRHRMhzWQfvddngqJqjjNgqqjlgvrtjJmtn
sGGwJdHDDTfWbTcRzbbz
BmjvdhNVlFBZmSZvFrWpfpcBrbzbWcbqpf
SLmSZLhNhMhwtLswPHGssd
mGhlPclTmhhlJRWlRTDPlJtTFMngBcLSBHHBHLHSwncFgLwB
jQVbjprjVfzbZQrzdGnHrrBLgSGwGFLHHg
zzZqjQjdvsRlGqThGJ
GSPQPvVmSwpVQGVlSQmWJRcFBpnFBcBWcJcJDc
rTTCLmhTTbZNqMNbhjfhmDzsFDWzsDnfcBWDDDzcFs
qmjhrhCtbMCZNhZMhNTZbLjvQdHdHGgwgdtQHlllQwlQgv
ggpCCgvjPTJWjBjWWJgCWCdVVHRZdLfZhqLdZRHZrf
GsstmNslzzzGlMnGMnVZRZrLpZqdhZHZrZHM
lNbDsbltmzpsmmmnnccBJTwPgWvvvTwPwFPS
FWbTRTdWGCnThqQVBQqJ
rrDMPrDcSrvtcJdLVhVHQMQVBQ
rNtNwrZtDNPmZStwvcvRlGFRlzCRlpmdpplbpb
gHrHrlFgjCrNDfCMTzwwLN
WhvTvvWnmQvpGWNNLzwWfNzW
vTnRZhnRRBhscBVpcBTvnsjFltPqggqHPHHjHrPcgrFg
VzfWRVsnNzWfsvpQPvvFbdVQpQ
SqCqqhLDTTCTTCDcSdbpPvdPFFvhMbdMvF
BCLBDCDGLlTClCSrglrGzWmrszzmHRJmfJfJpHNz
dwGBHGdwdcCMCBzzZJJssZFsBBgt
NRqbRbQhLQRLrQlTggFWlZtRlTvW
FbNDFDLqnmLmNbqbLQbhLNDpPcVHMSVMwCVHcPnVGccwjdcM
LdHtrrrHrLZrBVbQjtPnnsVb
TwfhhcTCTCpfJJwpTJwhDDPnbGsbFjlQnnQjFBFslsBQDl
pwJCThfRCMMMvhchhwHSmWLZHLNHMdrdZzPg
LbMQbHbHQLLMsWLvszvzvqCfqCCqss
ScWlpmplWrDzlzvznJ
RNNcZWhSZmdVdPwHbQQTTwNwjP
jFFFtHZjwmLNmnQCFL
sVbdsqcqHBHqrQrLPmWqQnmr
sfGJVVzJJsczczfsczBzzvdbTMTptlTZZgDSDtGlplZSlgHt
MgMQJdqqMDQJDggzTMgVplvffmctcCzmfjRlmmmjjR
HrGbGswnBBtRvccBlljB
HZPHRRGGshZHnnnwPnshnVZqMJJDdpQDVgDdVDWDpQ
whwQRQGHRVhWRRcLLJgLmL
jSnnzgBnpCZdCBjNmnNNJmllJTlccT
jPSzrzpzpCjgfZZrZCFpdwQDQVVPttGDtVqQVtHqth
mvnGFmvGhTcSCBcBpv
bwMRzbQLwBQRWSctCcTtLpss
JJgHZqRrbqDnmBjhDh
MVvvGrsbGtVsgTggHjSFHJBBBg
PPNpCpQPZppplttDNwZPBdfTFPPTSBWSFjjSTH
CpNwChQCzDDNZwhZlpwZpqrqsGGsmmctGbbbzcmMms
pjMbgCgdQjCgBjQQCncwcGGLDZvFtGLsZZFZtH
zPhhrVhVVSmqVqhmzPqvDtsLLHrFWFvGFGFsvt
SVPzVTzJNBfjDQbQTb
CRDjjRmmLhjRFFChmHDNLZzsZNnPZNzlnnsvlv
SSqcMwdrctQVtqTwSSgnvZnsZvnBZpcPsvlvbz
trMGSSVdQQqdGMtwwQCmRHHhmJFhsfJGfjHh
phJzrnJJwNNSJhSnwpwGGZzmvNfmmDvfcvcDfvbRPNcvvR
tWtgQBqsqdLFLmZvTRTfDZcb
ttssdgQqsHQtZFsqVdgdgdCBJGSphnljnJhjwrhnpJrrzJHl
srzpVWrWTptbrPpPPtcWpNhNNNdfhhDgDNvfBDNNds
jmnQHmLqlnSlGMjqnLLljRHqdNdgwHZBgfhZvBdNhDwBhhtZ
MjSlnLmMLnCGjlSQLVWCzbrcTpPtpFbFWr
ZnQRczHZsMSRZQcBRSZRscQwJbWFbbQwpWTjdFLJTJTWwd
PVmGqDlGhDPVNvqDmmqtqLbbpJfFJwpbdJpdbfdjwdbl
VGNCgGPgqVqhNvmNCNZnSsRLRsMzzgBRnHrS
ZgMMgJMhjmZrZgggmlTTbfwTfRfbRGwlGTDf
nPqQttNVPzSPnqpGDwDDbGfwbJ
dJvQzzJtdSPWSthhHMjgMvrHghsv
cMvwHCWcMnwWnScWVFzTqHpHFpVBFtFp
bbblgRDhtlGgRPFBRqFpmzVFBTFp
fPbtGJGhfDfDsPhQJDPbbnjjSWnwjdvQCnSSCnCSCM
NcgDtwghTLntgNtLrjfHSSFlSbCfprlL
ZGGMmdmVZVvsRQvMGRVVZCHPfpZSfZbFPlbPjCfH
RVRjvRzMQQJBVmzzgWgzTWTWhNcWzN
gsgBqdsWprWddpBghBpwwJzbLcvhCZmwZCFcJC
PRPtStHfwmJvzPmF
HnSHHRQDVFsVVgsgTWsG
QRQTRrDHSLSNzzZLzZ
dBmPwfwffWtWRtzdhhLzLzLzzLFN
BtWnWCCVBWtCBmRPqVmqmntjjlJHJslJQVsQjsbbHrjHDQ
TwwJrHSMnHGvWHMvvSqrrZbRrRqfqVNfbNRc
GjhstmPFFhlFtmmjQtlgVcZVfcgqqNRNpgRcbP
CzdCdFCtdzGWGJwWWHdW
zfSVfSpHVpCHSZLnsttDnvDvpcsqRc
rWzMGWFFPBFjqjDjFDFs
PbQQWbJPrQwPrrPBwrJCVzZZLZdLSLLmfZfHJd
gPDPLgsLNslNLHqlLqqjhjnwwjJbDjnjwTRnGD
tzdMdMddmcRMdtcFFGWnwWjFwjFhGbTG
mRMmttpVHNCNpNZN
mfCFGfDDFCDWtvvstjjJ
njnVnrggLlwVVqLpvHVpMpMsHVhhMW
QQPPPnjlPPSgwBrnNLcdFCNNGFbmbZFcZzFf
NzNHFNFnFrtgwwPchvGFFS
LsjdQCVsTsLCTTdMCJtQgPPqwhPgqScPGvSZ
jdLdVjJtCVjRCMpmpNfNNWHrNzDrNrHrmr
NmggPPrPbPmdCbcfCNLVRRWpWTWRVTpdVVWspW
qGhDzGqnwGQnJrjllJWttMRDFRtMVsTDTTZs
SrnHhGQlvLmSfbfc
DmdPCJMLlQdSjGCqjcGGccHH
zWtBwfsgvVnBfftWtnnpTmnTRhppHpTqpc
wzFtwZWmsVFzZtvPJSPbMFJFDJJJJd
wrPRRSJSWrTSRzRWrqlfCLlcBfBGDqrL
gVNQjgdVhdfqqhlDCBDs
NmjgbtmNtjNnjbPbvRJPbpwZwZSD
tNHGccGNthtSGmVjjVmrrVPqSB
fgDTwRwDFmLTFlspBBqjjBgqBssB
mLCZwZRMJMbtdWMtvd
TPzHPPgChjsgPdPTjQvZLvnpLQnvlRQn
GScFSzFWWrfGGMrVFMqGqmrBnplmwmnlZZlmnvvvLRnJLLvJ
qVSVFtFtFtSzrTNNDsHhhNTHht
NQqtqmqmNhvvclvhcljJ
CSCfMZSgWMvfWgrbjwcMJwrrrclr
CGSCZgSGZPRTSCWWDgGBRtnFRvqNRsLLzmsLzqpq
tWmtCZjnWZWCGjtnnmtcwFvvlgSDTDTvVwsVgCfT
LpLhpLdqbBMNsQPBQhpLvgFqllgfllvVvwTDTwlw
pNQBBdLbBPpPHLmGsRWjRZJzWZHc
WtjBSvBjWzTtzvDTjBfbbthsMNRNgCMQDgRcCcQwLRgCQgNc
HJmqnHqHpplVnlPdqGrpGQNLCgSwLMwFwFFCgnMLRw
SdJGpHVZmqpVVVdZVJGddsjvzzvZTsZvWTbvszWjWj
FhRhhLZgLZhCRWZBFFWRmGbvSgHqvvbPvHTPccVncb
wzSMpjJdwssdrdDfJJJsJSvpGVPqGpvVqTVqTnccnTvH
rwfMMdtDjNwjzDrjDDdtChRZWSWhmCWBSmLQRW
RWLNLWrhtrhWJmLnSStBBdVtBGVVBt
wQqnzjCFbflqpQlQFTDDGGsGDBZBSZMsDVfG
QvqCTwjjTqwbTqjznFzQvqjFJgmvgghJgPmgmvPNmNRJJNgN
qLqwhztjhqqDDzjZqqjPMmFmCnVDsmgbggggTMDC
WBhWJQrJcRmnFnWMTTCF
lvvJSlGSvBvJQBrcpSfwwLjLPjLfhptjwNtp
sbFjnZpPPGZLZzCRhqbJhJMCqMgS
vtNvFHBcNwNDHffvtfQMSMJVRMBMChVqSMCBJV
cQlvTffDlFWTlcfFTlHQNtzzGGWGdLsGWdrnzspjGdGr
LMQtlzlMQLLrztVfVdfqDdrhrhdd
JPJTHcvPTPTJGPZgbmvGPmcZhwRVdDBdSWfdRHSBfqBSVHqq
sJchPZGccmcbvcmgmPcCnnnnpzppQppspFjQntMl
qtQQtsMDqtPDGQltPHbsLFnMccRNcVLLrVNVwMVM
LCSdzZdBZmvzZTCBfJrwnWppFcWrFpdRnWpR
ThSgBZTLJmPHlgQHjPtq
mrwGPrVrbjbPVmwmbdTwbGfJMDJMgsqhhDjsqjJppfqt
SQnLnWnWHLSFCRnlQRnFhqfsDMJMppqDfcWgpDfD
NCSvLQnRSQFBLBzdgvTbbwPrzbPZ
FFjvvHZbHZnZpvFHZcFbgQVwgwQnJfQPVNQJGqSq
RWmCmdClRtTzVRwVfVQPNQgN
shwhzTsmlbhZDLbBHL
PpPHllshHDTlsprJrsPQpltzjVzjLNggZNznLNLnhNnnjL
qRBvSwqBdRqvmfvCRSSLjcnVcVmLgmnNZjmQVg
vdfbSfBWffMbQqQdtprtslHJsWDGHptt
pqQdFWlQZpGZpLpS
wnjwJhjvVgjwvwvsgwgtsRTtssGTtLrNtrSrHS
VDJVMGCCChjccDJDwgwVJvMBzBfzbzbDPPFBFBbffzbQqq
gBwwBZGhcfhnFjvrQjMhrjQQ
PPLJNdNldlNSRmzLSlpbHQvbvdMtjjbMtMtt
lqDJmlSmlmPzqNmzmVnvnBZDgvBWgcZTfD
HMqrwWqzWJqHzrjgGFNNtQFMFQnFBt
LddPLdVmchPSvmcvTZlvghLLFBDNDtFGDQpRnntnFDQnFPnB
SbSvZTSLSgqbCHJWzr
TGcjzjgtNqjttgNNTTjmGwLhfQQfDnDLDwSQWTSCvh
PHJRJJbBVMPRMJHbJRMPbwCQSSvfCDhVhvvwwvQLnW
ZJPMbHbJJJsdsJplRRRZsPJztrFrqtzGrgmcrprcmFjDgN
tlDpSbpwgbgtpddJppgJwJDtNQWGQlcGQGhlhnGGWcrcWWFr
MTZLqzjfFLqLjRfvqsQhNPGnhGGsnchW
LMCzjzMTTjjFRfZMBTCvRfLRDDbVVpSbSgwwwtSBSSDJgStg
ZLVTrJmJDHFtzSTlpc
wNhhNfhvwwvvfvPnsNPhglszqpcHcFbbFSzSzzCHzb
NWjPwgNgRHGWvhwWPfgfGwjMDQJdQLVLJLQVVLRdBRJrZr
CPRJCFJTqZfJlJRqssHJftCWQMnHHwMbbngMMrQMgMWwQn
BmzVVhvvcvDdWgwVrTnrMb
BjzvhjLLczzBjLchDLmLJtsCqFClTqsZCPtPTCjq
DbWjNCWQCRRNsDPpFGcjjcqFqFfm
PZdMSzSZTtZZqVmpqmmmTpgg
ZvZMzBztzvhvddPMQlNCQDbQLBLrsRRW
WzWFhHpWhvCpPpPLswMHswMMHLbgmH
NNZSZTVQNrTnqDqrrwtwwLstsMGMnbntGm
TBmQcrNqNSQVmrmQBPdpFFzhFlPzzCPF
nBgmSrjgmjtmrbjSFGLWtLVpFVQQVGFL
JlChvCzvqCqWffwFdFVQfPVPHPFGLV
JzvTThZcCCMcMMwJzlbjTjmnRgRTTBnWgbBn
rppjbbDpGnwrGprVCLLJZDzQqZzLNQqc
htflFBFmBBlWTTgsggtZHMQLCCCcHqHMfZczHq
gFdFTWgRhBmWWTFSGQbVnSSPnvndpv
qFSRRGGgTgThTQhcllCWCJCctWWhfJ
bvbdzNDMzHZNNHFHfJWWjljWNNfcnWtn
PdbPdPBHmsdbdbPdBHBdmdmsgrTqsGQRTwSpSFrqrRSFpRwp
pQJZZGQtChQtpWZQTTWhNtVdVWSLBrsLSVrLvrvrLdBd
lMHnzGRgPRMSMBLcvBSS
nglFzflzHRDGgzfzPgHRbTDQthbZbhhppNbbCqhb
jVrvrJjpZfZCCGctwhbhMRcM
BQQnFFTBdBndzssFsdTbRwDGTPGbcMbwtDgbcG
HnLtQQBLtWNrVpqjJvWN
dnVlsnJlMqnlNqJdnMRvDHBRvbBLHLpRSPPPRS
NcGGCthFwcFwmjCTGDSfPSSHSPfPtDHfbD
zNWNZGWNzQnWlJWVJn
tMGSBtRtvjFcGpQrQQQQrp
FffbJTJfPLNbTnJJmlVcQVfpQmlWVVfH
FTdJJdhNvZhMtRSh
pSTfMtMLSTPsPsBszP
jdlmlFHHhVdmVHFNFRnHzHQJsGZBJbbJDvsDRPBsrGrDrJ
VHnFjcdccjlmNVmnzmNVmCMggfqwtLLfSMwWtcWMSg`;

// Creates an array by splitting the string by newlines.
const trimmedInput = input.split(/\n/g);
console.log("Input split into an array is:", trimmedInput);

function findRepeatedChars(array) {
  let repeatedChars = [];

  // Splits the "rucksack" string by the middle and binds both halves.
  for (let i = 0; i < array.length; i++) {
    let halfPoint = array[i].length / 2;
    let firstHalf = array[i].slice(0, halfPoint);
    let secondHalf = array[i].slice(halfPoint, array[i].length);

    // Finds the character that repeats in both halves and pushes it to an array.
    for (let ii = 0; ii < firstHalf.length; ii++) {
      if (secondHalf.includes(firstHalf[ii])) {
        repeatedChars.push(firstHalf[ii]);
        break;
      }
    }
  }
  return repeatedChars;
}

const repeatedCharsArray = findRepeatedChars(trimmedInput);
console.log("All repeated characters:", repeatedCharsArray);

// Sums all priorities by using an alphabet array as reference for
// indexOf() searches that find the value to add.
function sumPriorities(array) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total = total + alphabet.indexOf(array[i]) + 1;
  }

  return total;
}
console.log("Sum of priorities is:", sumPriorities(repeatedCharsArray));

function findBadges(array) {
  let repeatedChars = [];

  // Iterates through every other three string of the array.
  for (let i = 0; i < array.length; i = i + 3) {
    // Finds if any characters in the first string of the current group of three
    // repeats in the other two and pushes them to an array.
    for (let ii = 0; ii < array[i].length; ii++) {
      if (
        array[i + 1].includes(array[i][ii]) &&
        array[i + 2].includes(array[i][ii])
      ) {
        repeatedChars.push(array[i][ii]);
        break;
      }
    }
  }

  return repeatedChars;
}
console.log(
  "Characters that repeat in every group of three strings are:",
  findBadges(trimmedInput)
);

const repeatedBadges = findBadges(trimmedInput);
console.log("Sum of badges is:", sumPriorities(repeatedBadges));
